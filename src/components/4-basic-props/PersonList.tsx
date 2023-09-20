type personProps = {
  persons: {
    name: string,
    age: number
  }[]
}

// Expected Props Example:
// const personsArray = [
//   {
//     name: "walter",
//     age: 58
//   },
//   {
//     name: "white",
//     age: 42
//   },
//   {
//     name: "junior",
//     age: 18
//   }
// ]
// <PersonList persons={personsArray} />

function PersonList(props: personProps) {
  return (
    <>
      {props.persons.map(
        (person) => {
          return <p>Hello {person.name}! you are {person.age} years old.</p>
        }
      )}
    </>
  )
}

export default PersonList