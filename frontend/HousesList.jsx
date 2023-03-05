import HouseItem from "./HouseItem";

function HousesList(props) {
  console.log("UserList");
  return (
    <ul>
      {props.houses.map((house) => (
        <HouseItem
              key={house.id}
              id={house.id}
              name={house.name}
              school={house.school}
              bank={house.bank}
              church={house.church}
              hospital={house.hospital}
        />
      ))}
    </ul>
  );
}

export default HousesList;