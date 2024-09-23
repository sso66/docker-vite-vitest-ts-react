import { useEffect, useState } from 'react'
import Data from '../types/CustomerQuoteType'
import ReactMarkdown from 'react-markdown'
import serviceProvider from '../assets/vite.svg'

const CustomerQuoteFetchData = () => {
  const [data, setData] = useState<Data>()
  const baseUrl = './customer-quote.json'

  const fetchData = () => {
    fetch(baseUrl)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setData(data)
        return data
      })
      .catch((e: Error) => {
        console.log(e.message)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <header>
        <div className="qmerit-logo">
          <h1>Qmerit</h1>
        </div>
        <div className="quote-title">
          <div className="quote-date">
            <div>
              <h2>{data?.description}</h2>
              <p>
                {data?.name} | Estimate {data?.estimateDate} | Expires
              </p>
            </div>
          </div>

          <div className="service-provider">
            <div className="contractor">
              <div className="tablet">
                <div>{data?.serviceProvider.contactFirstName}</div>
                <div>{data?.serviceProvider.constactLastName}</div>
                <div>{data?.serviceProvider.dbaName}</div>
                <div>{data?.serviceProvider.contactPhone}</div>
                <div>{data?.serviceProvider.contactEmail}</div>
              </div>

              <img src={serviceProvider} alt="Service Provder" />
            </div>
          </div>
        </div>
      </header>
      <div className=" grid-container">
        <div className="grid-item">
          <div className="service-provider">
            <h3>Service Provider</h3>
            <div className="contractor">
              <img
                className="mobile"
                src={serviceProvider}
                alt="Service Provider Mobile"
              />

              <div className="mobile">
                <div>{data?.serviceProvider.contactFirstName}</div>
                <div>{data?.serviceProvider.constactLastName}</div>
                <div>{data?.serviceProvider.dbaName}</div>
                <div>{data?.serviceProvider.contactPhone}</div>
                <div>{data?.serviceProvider.contactEmail}</div>
              </div>
            </div>

            {/* <main className='main'> */}
            <div className="project-information">
              <h3>Project Information</h3>
              <div>
                {data?.customer.firstName} {data?.customer.lastName}
              </div>
              <div>{data?.customer.address}</div>
              <div>{data?.customer.phone}</div>
              <div>{data?.customer.email}</div>
            </div>

            <div className="procedures">
              <ul>
                {data?.catalogItems?.map((catalogItems, index) => {
                  return (
                    <li key={index}>
                      <p>
                        <b>{catalogItems.name.en}</b>
                      </p>
                      <ReactMarkdown>
                        {catalogItems.description?.['en-us']}
                      </ReactMarkdown>
                      <form className="credits">
                        {catalogItems.quantity} x {catalogItems.retailPrice}
                        &nbsp;&nbsp;<b>${catalogItems.retailPrice}</b>
                      </form>
                    </li>
                  )
                })}
                <br />
                <form className="credits">
                  <label>Subtotal</label>
                  <label>
                    <b>${data?.totalRetailPrice}</b>
                  </label>
                </form>
              </ul>
            </div>
            {/* </main> */}
            {/* end-of-main */}

            <aside className="interactions">
              <h3>Quote Summary</h3>
              <form className="quote-summary">
                <div className="credits">
                  <label>
                    <b>Subtotal</b>
                  </label>
                  <label>${data?.retailSubtotal}</label>
                </div>
                <div className="credits">
                  <label>Deposit Received</label>
                  <label>-${data?.deposit}</label>
                </div>
                <div className="credits">
                  <label>
                    <b>Total</b>
                  </label>
                  <label>
                    <b>
                      &nbsp;&nbsp;<b>${data?.totalRetailPrice}</b>
                    </b>
                  </label>
                </div>
                <hr />
                <button className="btn-approve">APPROVE</button>
                <hr />
                <button className="btn-decline">DECLINE</button>
              </form>
            </aside>
          </div>

          <h3>Project Description</h3>
          <p>
            Lannister Electric will perform your EV charging installation!
            Consistent with Terms of Use of our software platform, which can be
            foud at Qmerit&apos;s Terms of Use, which you agree and abide by
            whenever using our service, you are contracting directly with
            Lannister Electric to perform your EV chagring installation. We
            encourage you to make sure you have a written agreement with your
            certified installer that specifies their license number, warranty,
            insurance coverage and other important aspects of the services to be
            provided by Lannister Electric. The scope of work being provided
            here is intended only t specify the parameters of the tiered price
            which you will pay to Qmerit based on the criteria you have inout
            into your platform. Qmerit will not be performing the services and
            will only be processing the payment and responsible to pay the
            certified installer you have selected on your behalf once the work
            is completed.
          </p>

          <footer className="help">
            {/* <h2>Footer</h2> */}
            <div>
              <b>Need assistance?</b>
            </div>
            <div>customerservice@qmerit.com</div>
            <div>+1 (888) 272-0090</div>
            <div>
              Project ID: {data?.projectId} | Quote ID: {data?.id}
            </div>
          </footer>
          <div />
        </div>
      </div>
      <hr />
    </>
  )
}

export default CustomerQuoteFetchData
