import { Person } from './types/Person.types'

type PersonProps = {
  persons: Person[]
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

function PersonList(props: PersonProps) {
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