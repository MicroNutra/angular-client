import React from 'react';

const GroupSearch = (props) => {
  return (
    <form>
      <select>
        {
          props.groups.map(group => <option key={ group.id }>{ group }</option>)
        }
      </select>
      <input className="btn btn-default" type="submit" value="Submit"/>
    </form>
  )
}

export default GroupSearch;
