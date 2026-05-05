import os
import glob
import re

base_dir = r"c:\Users\Administrator\Desktop\Antigravity\GTS"
html_files = glob.glob(os.path.join(base_dir, "**/*.html"), recursive=True)

header_phone_re = re.compile(r'<a class="header-phone" href="[^"]*">[^<]*</a>')
hero_phone_re = re.compile(r'<a class="btn btn-primary" href="#contacto-rapido">Llamar ahora</a>')
footer_contacto_re = re.compile(r'(<div><strong>Contacto</strong>)(.*?)(</div>)')
mobile_cta_re = re.compile(r'<div class="mobile-cta">(.*?)</div>')
large_phone_re = re.compile(r'<a class="phone-large" href="[^"]*">[^<]*</a>')

for filepath in html_files:
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Update header phone
    content = header_phone_re.sub(r'<a class="header-phone" href="tel:641172237">641 172 237</a>', content)
    
    # 2. Update hero "Llamar ahora" button
    content = hero_phone_re.sub(r'<a class="btn btn-primary" href="tel:641172237">Llamar ahora: 641 172 237</a>', content)
    
    # 3. Update footer Contacto
    new_footer_contacto = r'\1<a href="tel:641172237">📞 641 172 237</a><a href="https://wa.me/34641172237">💬 WhatsApp</a><a href="mailto:info@gtsfacilitysolutions.com">✉️ info@gtsfacilitysolutions.com</a><a href="garantias/index.html">Garantías</a>\3'
    # For nested pages, relative path to garantias might be different, let's preserve the existing garantias link
    def footer_replacer(match):
        garantias_link = ""
        m = re.search(r'<a href="([^"]*garantias[^"]*)">Garantías</a>', match.group(2))
        if m:
            garantias_link = f'<a href="{m.group(1)}">Garantías</a>'
        return match.group(1) + r'<a href="tel:641172237">📞 641 172 237</a><a href="https://wa.me/34641172237">💬 WhatsApp</a><a href="mailto:info@gtsfacilitysolutions.com">✉️ info@gtsfacilitysolutions.com</a>' + garantias_link + match.group(3)
        
    content = footer_contacto_re.sub(footer_replacer, content)

    # 4. Update mobile CTA
    def mobile_cta_replacer(match):
        # We replace the inside of mobile-cta entirely
        return '<div class="mobile-cta"><a href="tel:641172237">📞 Llamar</a><a href="https://wa.me/34641172237">💬 WhatsApp</a></div>'
    content = mobile_cta_re.sub(mobile_cta_replacer, content)
    
    # 5. Update large phone link in contact section
    content = large_phone_re.sub(r'<a class="phone-large" href="tel:641172237">641 172 237</a>', content)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

print(f"Updated {len(html_files)} files.")
