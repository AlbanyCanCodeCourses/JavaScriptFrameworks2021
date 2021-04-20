import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { expect } from "chai";
import App from "./App";

/**
 * This is boilerplate code used to get your tests up and running
 */
Enzyme.configure({ adapter: new Adapter() });

/**
 * See the README.md to see how to run this from the command line.
 *
 * If you need to debug your code, you can do this to print
 * an HTML-like string of what your component is rendering:
 *
 * ```javascript
 * const wrapper = mount(<App />); // or shallow instead of mount
 *
 * // prints the entire component
 * console.log(wrapper.debug());
 *
 * // prints a single element in the component
 * const textInput = wrapper.find("#text").first();
 * console.log(textInput.debug());
 * ```
 */

describe("<App />", () => {
  // Example 1
  it("should render a heading", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<h1>My Links</h1>)).to.be.true;
  });

  // Example 2
  it("should render two buttons on the screen (the first is the 'Add Link' button, and the second is the 'Hide Link' button", () => {
    const wrapper = shallow(<App />);
    const buttons = wrapper.find("button");
    expect(buttons).to.have.lengthOf(2);

    expect(buttons.first().text()).to.equal("Add Link");
    expect(buttons.last().text()).to.equal("Hide Links");
  });

  /**
   * Write a test that checks to see if two inputs are rendered on the screen
   */
  it('should render two inputs on the screen when component renders', ()=>{
    const wrapper = shallow(<App/>);
    const inputs = wrapper.find('input');
    expect(inputs).to.have.lengthOf(2);
  });

  // Remove the `.skip` when you are ready to write this test
  it("should render two links (<li>) on the screen when the component first renders", () => {

    const wrapper = mount(<App/>);
    const links = wrapper.find('li');
    expect(links).to.have.lengthOf(2);
    /**
     * Complete this unit test.
     * HINT: you might run into trouble with this one,
     * because `shallow` only tests a single component, and not the rendering
     * of its children. This means shallow won't test the rendering of <Link />
     * inside of <App />
     * @see https://enzymejs.github.io/enzyme/docs/api/mount.html
     */
  });

  // Remove the `.skip` when you are ready to write this test
  it("should hide the links when the hide button is clicked", () => {

    const wrapper = shallow(<App/>);
    const links = wrapper.find('li')
    const button = wrapper.find('button');
    button.find('#hide-links').simulate('click');
    expect(links).to.have.lengthOf(0);
    /**
     * Complete this unit test.
     * You are going to have to simulate a click event.
     * @see https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/simulate.html
     */
  });


  /**
   * Write a test to see if another <li> is added on to the screen
   * after the user clicks on the "Add Link" button
   */
  
  it('should test to see if another <li> is added to the screen when the "Add Link" button is clicked', ()=>{
    const wrapper = mount(<App/>);
    const links = wrapper.find('li');
    const button = wrapper.find('button');
    expect(links).to.have.lengthOf(2);
    
    button.find('#add-links').simulate('click');
    const wrappers = mount(<App/>);
    const link = wrapper.find('li');
    console.log(wrappers.find('li').debug());
    expect(link).to.have.lengthOf(3);
    

  });

  // Remove the `.skip` when you are ready to write this test
  it("should add the user input to the new link <li> on the screen when the add button is clicked", () => {
    const wrapper = mount(<App/>);
    const input = wrapper.find('input');
    input.find('#href').simulate('change', {target:{value: <li><a href="https://www.alink.com" target = '-blank' rel = 'noopener noreferrer'>Testing components built using react hooks with enzyme</a></li>}})
    /**
     * This should test that after the user enters a a text and href,
     * and then clicks on the "Add Link" button, it should render
     * a new <li> that looks like this:
     * @example <li>
     *   <a
     *    href="https://www.somewhere.com"
     *    target="_blank"
     *    rel="noopener noreferrer"
     *  >
     *    Testing Components built using React Hooks with Enzyme
     *  </a>
     * </li>
     *
     * For this test, you will need to enter text into the textboxes.
     * You can do this by triggering a change event on the <input />
     * @see https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/simulate.html
     * @see https://stackoverflow.com/questions/37219772/enzyme-how-to-access-and-set-input-value
     */
  });
});
