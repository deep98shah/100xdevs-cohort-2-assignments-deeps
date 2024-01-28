import './Profile.css'

export default function Profile() {
    return (
        <div id='profile-container'>
            <div id="profile-top-container">
                <div><b>Rita Correia<div>25</div></b></div>
                <div>London</div>
            </div>
            <div id="stats-container">
                <Stats count='80K' title='Followers'></Stats>
                <Stats count='80K' title='Followers'></Stats>
                <Stats count='80K' title='Followers'></Stats>
            </div>
        </div>
    )
}

function Stats(props) {
    return (
        <div className="individual-stats-container">
            <h3>{props.count}</h3>
            <h5>{props.title}</h5>
        </div>
    )
}