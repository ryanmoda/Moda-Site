# This script parses 'script2.js' file and outputs a sitemap.xml file for google search console

import re

moda = "http://www.modalight.com/#/"

regex = re.compile("(?<=\'\/)(.*?)(?=\')")
with open("script2.js", 'r') as f:
        f = f.read()
        result = re.findall(regex, f)

n = open("sitemap.xml", "w")
n.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n')

for x in result:
    n.write("<url>\n")
    n.write("<loc>")
    n.write(moda + x + "/</loc>\n</url>\n")

n.write("</urlset>")
