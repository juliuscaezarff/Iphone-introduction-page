function SoundSection() {
  const handleScrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }

  return (
    <div className="display-section wrapper">
      <h2 className="title">aaaaaaaaa</h2>
      <p className="text">aaaaaaaaa</p>
      <span className="description">aaaaaaaa</span>
      <button className="button">Try me!</button>
      <button className="back-button" onClick={handleScrollToTop}>TOP</button>
    </div>
  )
}

export default SoundSection
