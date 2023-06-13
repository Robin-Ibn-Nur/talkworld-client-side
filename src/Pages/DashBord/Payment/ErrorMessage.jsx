const ErrorMessage = ({ children }) => (
    <div className="ErrorMessage" role="alert">
        <svg width="16" height="16" viewBox="0 0 17 17">
            {/* Error SVG */}
        </svg>
        {children}
    </div>
);

export default ErrorMessage;