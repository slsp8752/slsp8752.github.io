#!/usr/bin/env python2

import subprocess

ls = subprocess.Popen(["ls", "-p", "."],
                      stdout=subprocess.PIPE,
                     )

grep = subprocess.Popen(["grep", "-v", "/$"],
                      stdin=ls.stdout,
                      stdout=subprocess.PIPE,
                      )

end_of_pipe = grep.stdout

with open("divs.txt", "w") as file:
    for line in end_of_pipe:
        stripped = line.rstrip()
        if (stripped != "divGen.py"):
            file.write('  <div class="folder">' + '\n' +
                       '    <i class="material-icons image" href="images/' + stripped + '" title=IMG_"' + stripped + '">image' + '\n' +
                       '      <p class="cooltip">Click to Open</p>' + '\n' +
                       '    </i>' + '\n' +
                       '    <h1>IMG_' + stripped + '</h1>' + '\n' +
                       '  </div>')
