/**
 * STOP! You will not modify the code that is in the file.
 * Instead, you will be writing the unit tests for this exercise
 * inside `App.test.js`
 */

function Links({ links }) {
  return (
    <ul>
      {links.map((link, index) => {
        const key = `link-${index}`;
        return (
          <li key={key}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Links;
