import { useState } from "react";

/* eslint-disable react/prop-types */
function TableActionsData({ actions }) {
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const generateState = () => {
    const obj = {};
    // eslint-disable-next-line no-unused-vars
    for (const [key, value] in actions.icons) {
      console.log(value);
      if (key == 0) obj[value.key] = true;
    }

    console.log(obj);
    return obj;
  };
  const [statusObj, setStatusObj] = useState(generateState());

  const styles = "block p-2 h-full bg-primary text-[1.7rem] mr-1 text-white";
  return (
    // <td>{ "hello"}</td>
    <td>
      <span className="flex flex-row flex-wrap">
        {actions.map((value) => {
          if (value.icons.length > 1) {
            const Icon1 = value.icons[0].icon;
            const Icon2 = value.icons[1].icon;

            return statusObj[value.icons[0].key] ? (
              <span
                className={`${styles} ${value.icons[0].colors.light} ${value.icons[0].colors.dark}`}
                key={value.icons[0].key}
                onClick={() => {
                  value.icons[0].handler();
                  setStatusObj((state) => ({
                    ...state,
                    [value.icons[0].key]: false,
                  }));
                }}
              >
                <Icon1 className="!text-[2rem] " />
              </span>
            ) : (
              <span
                className={`${styles} ${value.icons[1].colors.light} ${value.icons[1].colors.dark}`}
                key={value.icons[0].key}
                onClick={() => {
                  value.icons[1].handler();
                  setStatusObj((state) => ({
                    ...state,
                    [value.icons[0].key]: true,
                  }));
                }}
              >
                <Icon2 className="!text-[2rem]" />
              </span>
            );
          }

          const Icon = value.icons[0].icon;
          const handler = value.icons[0].handler;
          return (
            <span
              className={`${styles} ${value.icons[0].colors.light} ${value.icons[0].colors.dark}`}
              key={value}
              onClick={handler}
            >
              <Icon className="!text-[2rem]" />
            </span>
          );
        })}
      </span>
    </td>
  );
}

export default TableActionsData;
