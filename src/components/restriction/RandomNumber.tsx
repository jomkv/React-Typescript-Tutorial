type RandomNumberType = {
  value: number
}

type PositiveNumber = RandomNumberType & {
  isPositive: boolean,
  isNegative?: never,
  isZero?: never
}

type NegativeNumber = RandomNumberType & {
  isNegative: boolean,
  isPositive?: never,
  isZero?: never
}

type ZeroNumber = RandomNumberType & {
  isZero: boolean,
  isNegative?: never,
  isPositive?: never,
}

type RandomNumberProps = PositiveNumber | NegativeNumber | ZeroNumber

function RandomNumber({ value, isPositive, isNegative, isZero }: RandomNumberProps) {
  return (
    <div>
      {value} {isPositive && "Positive"} {isNegative && "Negative"} {' '} {isZero && "Zero"}
    </div>
  )
}

export default RandomNumber