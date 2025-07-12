import json

def extract_dune_quotes_to_json(input_file, output_file):
    """
    Extracts quotes with 'Dune' in the attribution, splits quote and credit, and writes them to a JSON file.

    Args:
        input_file (str): Path to the input text file.
        output_file (str): Path to the output JSON file.
    """
    quotes_data = []
    current_quote = []

    with open(input_file, 'r', encoding='utf-8') as f:
        for line in f:
            stripped = line.strip()
            if not stripped:
                if current_quote:
                    credit = current_quote[-1]
                    if "dune" in credit.lower():
                        quote_text = "\n".join(current_quote[:-1])
                        quotes_data.append({
                            "quote": quote_text.strip(),
                            "credit": credit.strip()
                        })
                    current_quote = []
            else:
                current_quote.append(stripped)

        # Handle last quote block if no trailing newline
        if current_quote:
            credit = current_quote[-1]
            if "dune" in credit.lower():
                quote_text = "\n".join(current_quote[:-1])
                quotes_data.append({
                    "quote": quote_text.strip(),
                    "credit": credit.strip()
                })

    with open(output_file, 'w', encoding='utf-8') as out_f:
        json.dump(quotes_data, out_f, indent=4, ensure_ascii=False)

    print(f"Saved {len(quotes_data)} Dune-related quotes to {output_file}")
    
extract_dune_quotes_to_json("quotes.txt", "quotes.json")