declare namespace konsole {
    namespace internal {
        function logReason(reason?: string): string;
    }
    function err(message: string, reason?: any): void;
    function warn(message: string, reason?: any): void;
    function info(message: string): void;
}
export default konsole;
