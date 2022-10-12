import React from "react";

const withStyles = (Component) => {
  return (props) => {
    const style = {
      padding: "0.2rem",
      margin: "1rem",
      backgroundColor: "aqua",
    };

    return <Component style={style} {...props} />;
  };
};

const Button = (props) => <button style={props.style}>Button with HOC</button>;
const Text = (props) => <p style={props.style}>Paragraph with HOC</p>;

const StyledButton = withStyles(Button);
const StyledText = withStyles(Text);

export const App = () => {
  return (
    <div>
      <StyledButton />
      <StyledText />
    </div>
  );
};
