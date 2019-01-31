import React from 'react'

class Contact extends React.Component {
  render () {
    return (
      <div className='contact'>
        <img src='images/kapiti.jpg' className='fullWidth' />
        <div className='content'>
          <div className='section'>
            <h1>Contact Kapiti Anglican</h1>
            <table>
              <tr>
                <th colspan='2'>Parish Office situated at St Paul’s</th>
              </tr>
              <tr>
                <td>1 Langdale Avenue</td>
              </tr>
              <tr>
                <td>Paraparaumu 5032</td>
              </tr>
              <tr />
              <tr>
                <td>Phone</td>
                <td>04 904 7300</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>office@kapitianglican.org.nz</td>
              </tr>
              <tr>
                <th colspan='2'>Office hours</th>
              </tr>
              <tr>
                <td colspan='2'>Tuesday-Friday 9am—12 noon</td>
              </tr>
            </table>
            <div className='mapouter'><div className='gmap_canvas'><iframe id='gmap_canvas' src={`https://maps.google.com/maps?q=st%20pauls%2C%20paraparaumu&t=&z=15&ie=UTF8&iwloc=&output=embed`} frameBorder='0' scrolling='no' marginHeight='0' marginWidth='0' /></div></div>
          </div>
          <div className='section'>
            <h1>Parish Directory</h1>
            <table>
              <tr>
                <th colspan='2'>Vicar & St Paul’s 8am & 9.30am services</th>
              </tr>
              <tr>
                <td>Revd Julie Rokotakala</td>
                <td>021 118 3657</td>
              </tr>
              <tr>
                <th colspan='2'>Warden’s</th>
              </tr>
              <tr>
                <td>Sheridan David</td>
                <td>04 298 1358</td>
              </tr>
              <tr>
                <td>Mary Cropp</td>
              </tr>
              <tr>
                <th colspan='2'>Priests responsible for St Mark’s</th>
              </tr>
              <tr>
                <td>Revds John & Barbara Bonifant</td>
                <td>04 905 3301</td>
              </tr>
              <tr>
                <th colspan='2'>Congregational Chaplain for St Paul’s 11am Service</th>
              </tr>
              <tr>
                <td>Grant Ashton</td>
                <td>0272 761 104</td>
              </tr>
              <tr>
                <th colspan='2'>Priest responsible for St Peter’s and Parish Wide Prayer & Pastoral Ministries</th>
              </tr>
              <tr>
                <td>Revd Lynda Wards</td>
                <td>04 234 1170</td>
              </tr>
              <tr>
                <th colspan='2'>Priest & Missioner to the Corporate and not for profit world</th>
              </tr>
              <tr>
                <td>Revd Jon Hartley</td>
                <td>021 466 566</td>
              </tr>
              <tr>
                <th colspan='2'>Deacon for Community Engagement</th>
              </tr>
              <tr>
                <td>Revd Carrole Lewis</td>
                <td>04 902 2532</td>
              </tr>
              <tr>
                <th colspan='2'>Parish Chaplain for Resthomes & Retirement Villages</th>
              </tr>
              <tr>
                <td>Kathleen Fleck</td>
                <td>04 298 5630</td>
              </tr>
              <tr>
                <th colspan='2'>Messy Church</th>
              </tr>
              <tr>
                <td>Revd Carrole Lewis</td>
                <td>04 902 2532</td>
              </tr>
              <tr>
                <th colspan='2'>Study/House Groups</th>
              </tr>
              <tr>
                <td>Kathleen Fleck</td>
                <td>04 298 5630</td>
              </tr>
              <tr>
                <th colspan='2'>Finance</th>
              </tr>
              <tr>
                <td>Paul Bull</td>
                <td>04 902 3320</td>
              </tr>
              <tr>
                <th colspan='2'>Parish Administration/Vicar’s PA</th>
              </tr>
              <tr>
                <td>Becky Devane</td>
                <td>04 904 7300</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
