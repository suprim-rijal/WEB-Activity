const Service = ({ icon, title, text, details }) => {
  return (
    <article className='service'>
      <span className='service-icon'>
        <i className={icon}></i>
      </span>
      <div className='service-info'>
        <h4 className='service-title'>{title}</h4>
        <p className='service-text'>{text}</p>
        {details && <p className='service-details'>{details}</p>}
      </div>
    </article>
  )
}
export default Service