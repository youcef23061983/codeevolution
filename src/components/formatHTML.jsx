export default function formatHTML(html) {
  const tab = "  "; // 2 spaces for indentation
  let result = "";
  let indent = "";

  html.split(/>\s*</).forEach((element, index) => {
    if (element.match(/^\/\w/)) {
      // Decrease indentation for closing tags
      indent = indent.substring(tab.length);
    }
    result += `${indent}<${element}>\n`;
    if (element.match(/^<?\w[^>]*[^\/]$/) && !element.startsWith("<!")) {
      // Increase indentation for opening tags
      indent += tab;
    }
  });

  return result.substring(1, result.length - 2); // Remove extra < and > at the start and end
}
