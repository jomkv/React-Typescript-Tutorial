type ListProps<T> = {
  items: T[]
  onClick: (value: T) => void
}

export const List = <T extends {}>({items, onClick}: ListProps<T>) => {
  return (
    <div>
      <h1>List of Items</h1>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => {onClick(item)}}>
            {JSON.stringify(item)}
          </div>
        )
      })}
    </div>
  )
}