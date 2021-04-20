import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { expect } from "chai";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

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

  it("should render two inputs on the screen", () => {
    const wrapper = shallow(<App />);
    const inputs = wrapper.find("input");
    expect(inputs).to.have.lengthOf(2);
  });

  it("should render two links (<li>) on the screen when the component first renders", () => {
    /**
     * Using 'mount' instead of 'shallow', because `shallow` will not render
     * children components. This means shallow won't test the rendering of <Link />
     * inside of <App />
     */
    const wrapper = mount(<App />);
    const originalLinks = wrapper.find("li");
    expect(originalLinks).to.have.lengthOf(2);
  });

  it("should hide the links when the hide button is clicked", () => {
    const wrapper = mount(<App />);
    const hideButton = wrapper.find("#hide-links").first();
    /**
     * Simulating a click event
     */
    hideButton.simulate("click");

    const newLinks = wrapper.find("li");
    expect(newLinks).to.have.lengthOf(0);
  });

  it("should add a another link <li> on the screen when the add button is clicked", () => {
    const wrapper = mount(<App />);

    const addButton = wrapper.find("#add-links").first();
    /**
     * Simulating a click event
     */
    addButton.simulate("click");

    const links = wrapper.find("li");
    expect(links).to.have.lengthOf(3);
  });

  it("should add the user input to the new link <li> on the screen when the add button is clicked", () => {
    const wrapper = mount(<App />);

    /**
     * Simulating the user typing text into a textbox,
     * which will trigger a change event that updates state
     */
    const textInput = wrapper.find("#text").first();
    textInput.simulate("change", {
      target: {
        value: "Testing Components built using React Hooks with Enzyme",
      },
    });

    const hrefInput = wrapper.find("#href").first();
    hrefInput.simulate("change", {
      target: {
        value:
          "https://itnext.io/testing-components-built-using-react-hooks-with-jest-enzyme-edb87d703756",
      },
    });

    const addButton = wrapper.find("#add-links").first();
    addButton.simulate("click");

    /**
     * Method 1
     */
    const link = wrapper.find("li").last();
    expect(
      link.contains(
        <a
          href="https://itnext.io/testing-components-built-using-react-hooks-with-jest-enzyme-edb87d703756"
          target="_blank"
          rel="noopener noreferrer"
        >
          Testing Components built using React Hooks with Enzyme
        </a>
      )
    ).to.be.true;

    /**
     * Method 2
     */
    const anchor = wrapper.find("li > a").last();
    expect(anchor.text()).to.equal(
      "Testing Components built using React Hooks with Enzyme"
    );
    expect(anchor.prop("href")).to.equal(
      "https://itnext.io/testing-components-built-using-react-hooks-with-jest-enzyme-edb87d703756"
    );
  });
});
