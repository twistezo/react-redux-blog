import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

class FormattingHelp extends Component {
  render() {
    return (
      <div className='pt-4'>
        <h4>Formatting options (only in Post body)</h4>
        <Table bordered>
          <thead>
            <tr>
              <th>Usage</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>### header h3</td>
              <td>
                <h3>header h3</h3>
              </td>
            </tr>
            <tr>
              <td>#### header h4</td>
              <td>
                <h4>header h4</h4>
              </td>
            </tr>
            <tr>
              <td>*italics*</td>
              <td>
                <em>italics</em>
              </td>
            </tr>
            <tr>
              <td>**bold**</td>
              <td>
                <strong>bold</strong>
              </td>
            </tr>
            <tr>
              <td>`code`</td>
              <td>
                <code>code</code>
              </td>
            </tr>
            <tr>
              <td>
                <p>```</p>
                <p>randomArrayItem = array...</p>
                <p>array[Math.floor...</p>
                <p>```</p>
              </td>
              <td>
                <pre>
                  <code>
                    <p>randomArrayItem = array =></p>
                    <p>
                      &nbsp;&nbsp;array[Math.floor(Math.random() *
                      array.length)];
                    </p>
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td>![alt text](url = 30x30)</td>
              <td>
                <img
                  alt='Alt Text'
                  src='https://avatars.dicebear.com/v2/identicon/test.svg'
                  width='30'
                  height='30'
                />
              </td>
            </tr>
            <tr>
              <td>{'<http://www.example.com>'}</td>
              <td>
                <a href='http://www.example.com'>http://www.example.com</a>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}

export default FormattingHelp
