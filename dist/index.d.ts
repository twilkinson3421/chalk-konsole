declare namespace konsole {
    namespace internal {
        function logReason(reason?: string): string;
    }
    function err(message: string, reason?: string): void;
    function warn(message: string, reason?: string): void;
    function info(message: string, reason?: string): void;
    function success(message: string, reason?: string): void;
}
export default konsole;
