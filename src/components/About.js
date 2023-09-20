export default function About(props) {
    
    let myStyle = {
        color: 'dark',
        backgroundColor: 'white'
    }

  return (
    <div className='container' style={myStyle}>
        <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Overview</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>NewsHub</strong> is a web-based news aggregator application built using <code>Reactjs</code>, designed to keep you informed and up-to-date with the latest news from various categories. Whether you're interested in technology, business, sports, health, entertainment, or general news, NewsHub has you covered. With a clean and <code>user-friendly</code> interface, this application allows you to explore news articles, read summaries, and access the full articles from trusted sources.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
               <strong>How To Use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <ul style={{ listStyleType: "decimal" }}>
                <li>Upon opening NewsHub, users are greeted with a clean and intuitive homepage featuring various news categories.</li>
                <li>Users can click on a category to explore news articles within that category.</li>
                <li>Pagination buttons at the bottom allow users to navigate through multiple pages of articles.</li>
                <li>Clicking on an article card opens a detailed view with the option to read the full article on the source website.</li>
                </ul>
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Motivation</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                In today's fast-paced world, staying informed about current events and the <code>latest news</code> is crucial. However, with the vast amount of information available online, finding reliable and up-to-date news from trusted sources can be a challenging task. This challenge served as the primary motivation behind the development of <strong>NewsHub.</strong>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
