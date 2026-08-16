import config from "../components/utills/Config";
const ShowConfig = () => {
  return (
    
    <div>
        <p>BASE URL {config.BASE_URL}</p>
        <p>TIMEOUT {config.TIMEOUT}</p>
    </div>
  )
}

export default ShowConfig;