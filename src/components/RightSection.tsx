import i from "../assets/i.svg"
import redirect2 from "../assets/redirect-2.svg"

const RightSection = () => {
  return (
    <div className='bg-bg-outer min-w-[300px] text-white p-4 flex flex-col gap-8'>
      <div>
        <h2 className='text-xl font-bold mb-4'>cart_campaign</h2>
        <div className='space-y-1 font-medium'>
          <div className='flex items-center space-x-2'>
            <img src={i} className='block size-4' />
            <p>Last 2 commits scanned</p>
          </div>
          <div className='flex items-center space-x-2'>
            <img src={i} className='block size-4' />
            <p>5 entry points identified</p>
          </div>
        </div>
      </div>

      <div>
        <label className='block font-medium mb-2'>Selected flow</label>
        <select className='block w-full p-2 bg-bg-inner border border-bg-border-2 rounded'>
          <option value='POST /carts/{carts_id}'>POST /carts/carts_id</option>
        </select>
      </div>

      <div className='space-y-2'>
        <label className='block font-medium mb-2'>Dependencies</label>
        <p className='text-sm text-text-outer'>
          Select the ones you want to mock
        </p>
        <div className='space-y-2'>
          {[
            { option: "https", isChecked: true },
            { option: "product_client", isChecked: true },
            { option: "sqlalchemy.orm", isChecked: false },
            { option: "cart_crud", isChecked: false },
            { option: "cartModel", isChecked: false },
          ].map(({ option, isChecked }) => (
            <div
              key={option}
              className='flex items-center space-x-2 text-[15px]'
            >
              <input
                type='checkbox'
                id={option}
                name={option}
                className='form-checkbox'
                defaultChecked={isChecked}
              />
              <label htmlFor={option} className='font-medium'>
                {option}
              </label>
              <a href='/' className='cursor-pointer size-4 ml-auto'>
                <img src={redirect2} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className='space-y-2'>
        <label className='block font-medium mb-2'>Databases</label>
        <p className='text-sm text-text-outer'>
          Select if you want to mock databases
        </p>
        <div className='space-y-2'>
          {[
            { option: "I want to mock databases", isChecked: false },
            { option: "I don’t want to mock database", isChecked: true },
          ].map(({ option, isChecked }) => (
            <div
              key={option}
              className='flex items-center space-x-2 text-[15px]'
            >
              <input
                type='checkbox'
                id={option}
                name={option}
                className='form-checkbox'
                defaultChecked={isChecked}
              />
              <label htmlFor={option} className='font-medium'>
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className='font-medium mb-2'>Database Configurations</h3>
        <div className='space-y-4'>
          <fieldset className="'w-full px-2 py-2 bg-bg-inner border border-accent-orange rounded">
            <legend className="text-sm text-text-outer">Database User</legend>
            <input type='text' className='w-full px-1' />
          </fieldset>
          <fieldset className="'w-full p-2 bg-bg-inner border border-accent-orange rounded">
            <legend className="text-sm text-text-outer">Database Password</legend>
            <input type='password' className='w-full px-1' />
          </fieldset>
          <fieldset className="'w-full p-2 bg-bg-inner border border-accent-orange rounded">
            <legend className="text-sm text-text-outer">Database Name</legend>
            <input type='text' className='w-full px-1' />
          </fieldset>
        </div>
      </div>
    </div>
  )
}

export default RightSection
