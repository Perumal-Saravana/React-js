function Car(props){

  //props in function
    const {carinfo} = props
    const {brand,color} = carinfo

    const text = `Hi I am ${color} color ${brand} car`;
    return (
      <h1>{text}</h1>
    )
  }
  export default Car