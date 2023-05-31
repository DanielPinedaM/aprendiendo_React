/* eslint-disable react/prop-types */

export function Saludar({ title, name = 'valorXdefecto' }) {
  return (
    <>
      <h1>
        {title} - {name}
      </h1>
    </>
  );
}

export function UserCard(props) {
  return (
    <>
    {/* Warning: Each child in a list should have a unique “key” prop.
        https://react.dev/learn/rendering-lists
        
        https://www.youtube.com/watch?v=rLoWMU4L_qE&t=8582s*/}
      {Object.entries(props).map((entry, index) => {
        const [propiedad, valor] = entry;
        return (
          <div key={index}>
            <ul>
              <li>
                {propiedad} → {String(valor)}
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
}