type personProps = {
    persons: {
        name: string,
        age: number
    }[]
}

// Expected Props Example:
// const persons = [
//     {
//         name: "walter",
//         age: 58
//     },
//     {
//         name: "white",
//         age: 42
//     },
//     {
//         name: "junior",
//         age: 18
//     }
// ]

function Person(props: personProps) {
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

export default Person