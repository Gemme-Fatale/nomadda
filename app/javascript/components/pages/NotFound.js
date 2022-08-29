import React, { Component } from 'react'

class NotFound extends Component {
  render() {
    return (
      <>
        <div className='not-found'>
          <img src="https://images.unsplash.com/photo-1622266234859-e4654e3587d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt='lost woman' style={{ width:"100%"}}/>
          <div class="container">
            <h1 class="title"><span>NOT FOUND</span></h1>
            <p>“Not All Who Wander Are Lost.”
            <br/> -JRR Tolkien</p>
            <nav class="nav">
              <a href="/" class="link">Home</a>
            </nav>
          </div>
        </div>
      </>
    )
  }
}

export default NotFound