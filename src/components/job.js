import React from "react";
import { FormattedDate, FormattedNumber } from "react-intl";

const Job = (props) => {
  const salaryInMillions =
    props.offer.salary >= 1
      ? `${props.isSpanish ? props.offer.salary.toFixed(1) + ' millones' : props.offer.salary.toFixed(1) + ' million'}`
      : props.offer.salary;

  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{salaryInMillions}</td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </td>
      <td>
        <FormattedNumber
          value={props.offer.views}
          style="decimal"
          useGrouping={true}
        />
      </td>
    </tr>
  );
};

export default Job;
