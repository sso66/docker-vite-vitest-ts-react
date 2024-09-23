import '../styles/media-query.css'

const MediaQuery = () => (
  <div>
    {' '}
    <h1>Hiding elements in responsive layout using CSS?</h1>
    <div className="box lg">This is only visible on large devices</div>
    <div className="box md">
      This is only visible on medium and large devices
    </div>
    <div className="box sm">
      This is only visible on smaller, medium and large devices
    </div>
  </div>
)

export default MediaQuery
