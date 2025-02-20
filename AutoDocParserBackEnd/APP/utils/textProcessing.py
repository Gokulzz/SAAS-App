import re

def extract_structured_data(textract_response):
    """
    Parses Textract response and extracts structured invoice details.
    """
    structured_data = {
        'invoice_number': None,
        'invoice_date': None,
        'total_amount': None,
        'line_items': [],
        'dates': [],
        'amounts': []
    }

    # Regex Patterns
    date_pattern = r'\b(\d{1,2}[\s/-]?[A-Za-z]{3,9}[\s/-]?\d{4}|\d{2}[-/]\d{2}[-/]\d{4})\b'
    amount_pattern = r'\b(\$?\d{1,3}(?:,\d{3})*(?:\.\d{2})?)\b'
    invoice_pattern = r'Invoice\s*(No|Number)?[:\-]?\s*([A-Za-z0-9-]+)'
    
    all_text_blocks = [block for block in textract_response['Blocks'] if block['BlockType'] in ['LINE', 'WORD']]
    all_text = ' '.join([block['Text'] for block in all_text_blocks if 'Text' in block])

    for block in all_text_blocks:
        if 'Text' not in block:
            continue
        
        text = block['Text']

        # Match Invoice Number (Avoid "Invoice Date")
        if "invoice" in text.lower() and "date" not in text.lower():
            invoice_match = re.search(invoice_pattern, text, re.IGNORECASE)
            if invoice_match:
                structured_data['invoice_number'] = invoice_match.group(2)

        # Match Invoice Date
        date_matches = re.findall(date_pattern, text)
        if date_matches:
            structured_data['dates'].extend(date_matches)

        # Match Amounts
        amount_matches = re.findall(amount_pattern, text)
        if amount_matches:
            structured_data['amounts'].extend(amount_matches)

        # Match Total Amount (Ensure Amount Follows "TOTAL")
        if any(keyword in text.lower() for keyword in ['total', 'amount due']):
            next_index = all_text_blocks.index(block) + 1
            if next_index < len(all_text_blocks):
                next_block = all_text_blocks[next_index]
                if 'Text' in next_block:
                    total_match = re.findall(amount_pattern, next_block['Text'])
                    if total_match:
                        structured_data['total_amount'] = total_match[0]  # First match is the total

    # Assign First Date Found
    structured_data['invoice_date'] = structured_data['dates'][0] if structured_data['dates'] else None

    return structured_data
