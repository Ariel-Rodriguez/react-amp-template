import React, { Fragment } from 'react'
import { AMP } from 'react-amp-template'
import Heading from './Heading'
import PostCard from './PostCard'

const { LiveList } = AMP


const Body = props => (
  <body>
    <Heading date={props.date} />
    <LiveList
      layout="container"
      data-poll-interval="15000"
      data-max-items-per-page="5"
      id="amp-live-list-insert-blog"
    >
      <button
        id="live-list-update-button"
        update
        on="tap:amp-live-list-insert-blog.update"
        className="ampstart-btn caps"
      >
        You have updates
      </button>
      <div items>
        <div id="post1" data-sort-time="20180415002145">
          <PostCard />
        </div>
      </div>
      <div pagination>
        <nav aria-label="amp live list pagination">
          <ul className="pagination">
            <li>1</li>
          </ul>
        </nav>
      </div>
    </LiveList>
  </body>
)

export default Body
