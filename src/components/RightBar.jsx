import React from 'react'
import { Badge } from 'reactstrap'
import ProfileImage from '../assets/profile-pic.jpg'
import GithubIcon from '../assets/github-icon.png'
const RightBarBadge = props => (
  <Badge className="m-1" color="light">
    {props.title}
  </Badge>
)
const RightBar = () => {
  return (
    <div className="RightBar">
      <img className="Picture" src={ProfileImage} />
      <div className="Bio mt-2 text-right">
        <h5>
          Junghun Lee
          <br />
          azxca1731
          <br />
          nogada
        </h5>
      </div>
      <div className="BioDescription text-right mt-3 pt-3 mb-3 pb-3">
        명지대학교에서 컴퓨터 공학을
        <br />
        전공하고 있는 학생입니다.
        <br />
        웹 기술 및 앱에 많은 관심이 있습니다.
        <br />
      </div>
      <div className="BadgeZone text-right mb-3 pb-3">
        <RightBarBadge title="Javascript" />
        <RightBarBadge title="React" />
        <RightBarBadge title="NextJS" />
        <RightBarBadge title="Java" />
        <RightBarBadge title="Android" />
        <RightBarBadge title="Firebase" />
      </div>
      <div className="ContactMe text-right">
        <h5>Contact Me</h5>
        Email : azxca1731@gmail.com
        <br />
        <a href="https://github.com/azxca1731/">
          <img className="githubLink mt-2" src={GithubIcon} />
        </a>
      </div>
      <style jsx>{`
        .RightBar {
          color: #000000;
          opacity: 0.7;
          background-color: #000;
          width: 100%;
          padding: 30px;
          height: 800px;
        }
        .Picture {
          width: 100%;
          height: 300px;
          background-color: #fff;
        }
        .Bio {
          color: #fff;
        }
        .BioDescription {
          border-top: 1px solid white;
          border-bottom: 1px solid white;
          color: #fff;
        }
        .BadgeZone {
          border-bottom: 1px solid white;
        }
        .ContactMe {
          color: #fff;
        }
        .githubLink {
          width: 50px;
          height: 50px;
        }
      `}</style>
    </div>
  )
}
export default RightBar
