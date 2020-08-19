import React from "react";

export default function Form(props) {
  const { update, submit, values } = props;

  const onChange = (event) => {
    const { name, value } = event.target;
    update(name, value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };

  return (
    <div>
      <h1>Team Members List</h1>
      <form onSubmit={onSubmit}>
        <h3>Add A Team Member</h3>
        <label>
          Your Name:{" "}
          <input
            type="text"
            maxLength="20"
            placeholder="Your Name"
            onChange={onChange}
            name="name"
            value={values.name}
          ></input>
        </label>
        <br />
        <label>
          Your Email:{" "}
          <input
            type="email"
            maxLength="50"
            placeholder="Your Email"
            onChange={onChange}
            name="email"
            value={values.email}
          ></input>
        </label>
        <br />
        <label>
          Choose Your Role:&nbsp;
          <select onChange={onChange} value={values.role} name="role">
            <option value="your-role">Role</option>
            <option value="frontend-engineer">Front End Engineer</option>
            <option value="backend-engineer">Back End Engineer</option>
            <option value="ui-designer">User Interface</option>
            <option value="ux-designer">User Experience</option>
          </select>
          <br />
          <button
            disabled={
              !values.name || !values.email || !values.role ? true : false
            }
            type="submit"
          >
            Submit
          </button>
        </label>
      </form>
    </div>
  );
}
