import '../../styles/components/common/FormPage.css'

const FormPage = ({ children }) => {
  return (
    <div className="form-page-wrapper">
        <form className="form-page">
            {children}
        </form>
    </div>
  )
}

export default FormPage