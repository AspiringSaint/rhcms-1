import '../../styles/components/common/FormSection.css';

const FormSection = ({ title, children }) => {
  return (
    <div className="form-section">
      {title && <h3>{title}</h3>}
      <div className="form-section-content">
        {children}
      </div>
    </div>
  );
};

export default FormSection;
