interface LabelProps {
    children: React.ReactNode;
    required?: boolean;  
  }
  
  const Label: React.FC<LabelProps> = ({ children, required }) => {
    return (
      <label className="block text-foreground">
        {children}
        {required && <span className="text-red-500"> *</span>} 
      </label>
    );
  };
  
  export default Label;
  