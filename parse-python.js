const python = require('lezer-python');
const input = "x = 10\nprint(10)"
// const input = "globals()";

const tree = python.parser.parse(input);

const cursor = tree.cursor();
do {
//  console.log(cursor.node);
  cursor.firstChild();
  cursor.nextSibling();
  cursor.firstChild();
  console.log(cursor.node.type.name);
  console.log(input.substring(cursor.node.from, cursor.node.to));
} while(cursor.next());

