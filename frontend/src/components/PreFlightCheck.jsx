import React, { useEffect, useRef, useState } from 'react';

export default function PreFlightCheck({ onReady, onCancel }) {
    const videoRef = useRef(null);
    const [devices, setDevices] = useState([]);
    const [selectedDevice, setSelectedDevice] = useState('');
    const [stream, setStream] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // 1. Ask for permissions and get the list of cameras
    useEffect(() => {
        let activeStream = null;

        const initializeCamera = async () => {
            setIsLoading(true);
            setErrorMsg(null);
            try {
                // Request access first
                activeStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });

                // Once granted, get all devices
                const allDevices = await navigator.mediaDevices.enumerateDevices();
                const videoDevices = allDevices.filter(device => device.kind === 'videoinput');

                setDevices(videoDevices);
                if (videoDevices.length > 0) {
                    setSelectedDevice(videoDevices[0].deviceId);
                }
            } catch (err) {
                console.error("Camera access error:", err);
                if (err.name === 'NotAllowedError') {
                    setErrorMsg("Camera access denied. Please click the lock icon in your browser's address bar to allow camera access, then refresh the page.");
                } else if (err.name === 'NotFoundError') {
                    setErrorMsg("No camera detected. A working webcam is required for this assessment. Please connect a webcam and try again.");
                } else {
                    setErrorMsg("Unable to access the camera. Please ensure it is not being used by another application.");
                }
            } finally {
                setIsLoading(false);
            }
        };

        initializeCamera();

        // Cleanup function
        return () => {
            if (activeStream) {
                activeStream.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    // 2. Start the specific camera chosen from the dropdown
    useEffect(() => {
        if (!selectedDevice) return;

        let activeStream = null;
        const startSelectedCamera = async () => {
            try {
                if (stream) stream.getTracks().forEach(t => t.stop()); // Stop old stream

                activeStream = await navigator.mediaDevices.getUserMedia({
                    video: { deviceId: { exact: selectedDevice } }
                });

                setStream(activeStream);
                if (videoRef.current) {
                    videoRef.current.srcObject = activeStream;
                }
            } catch (err) {
                setErrorMsg("Failed to start the selected camera.");
            }
        };

        startSelectedCamera();

        return () => {
            if (activeStream) activeStream.getTracks().forEach(track => track.stop());
        };
    }, [selectedDevice]);


    // 3. Hand off to the Exam
    const handleProceed = () => {
        if (stream) stream.getTracks().forEach(t => t.stop()); // Stop preview stream
        onReady(selectedDevice); // Pass the chosen camera ID to the main App
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/90 backdrop-blur-md p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden flex flex-col md:flex-row">

                {/* Left Side: Instructions */}
                <div className="bg-brand-dark text-white p-8 md:w-1/2 flex flex-col justify-center">
                    <h2 className="text-2xl font-black uppercase tracking-widest mb-4">Hardware Setup</h2>
                    <p className="text-emerald-100 font-medium mb-6 text-sm leading-relaxed">
                        Before entering the secure exam environment, we must verify your video feed.
                    </p>
                    <ul className="space-y-3 text-xs font-bold text-emerald-50 mb-8">
                        <li className="flex items-center"><i className="fa-solid fa-check text-brand-gold mr-3"></i> Ensure your face is clearly lit.</li>
                        <li className="flex items-center"><i className="fa-solid fa-check text-brand-gold mr-3"></i> Remove masks or heavy sunglasses.</li>
                        <li className="flex items-center"><i className="fa-solid fa-check text-brand-gold mr-3"></i> Position yourself in the center of the frame.</li>
                    </ul>
                </div>

                {/* Right Side: Camera Preview */}
                <div className="p-8 md:w-1/2 bg-gray-50 flex flex-col items-center">
                    {isLoading ? (
                        <div className="h-48 w-full bg-gray-200 rounded-xl flex items-center justify-center animate-pulse">
                            <span className="text-gray-500 font-bold text-sm"><i className="fa-solid fa-spinner fa-spin mr-2"></i> Accessing Camera...</span>
                        </div>
                    ) : errorMsg ? (
                        <div className="bg-red-50 border border-red-200 p-4 rounded-xl text-center w-full my-auto">
                            <i className="fa-solid fa-video-slash text-red-500 text-3xl mb-3"></i>
                            <p className="text-red-800 text-sm font-bold mb-4">{errorMsg}</p>
                            <button onClick={onCancel} className="px-6 py-2 bg-red-100 text-red-700 rounded-lg text-xs font-bold uppercase hover:bg-red-200 shadow-sm border border-red-200">Return to Safety</button>
                        </div>
                    ) : (
                        <>
                            <div className="w-full relative rounded-xl overflow-hidden shadow-inner border-4 border-gray-200 bg-black mb-4">
                                <video ref={videoRef} autoPlay playsInline muted className="w-full h-48 object-cover transform scale-x-[-1]"></video>
                            </div>

                            {devices.length > 1 && (
                                <div className="w-full mb-6">
                                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Select Camera</label>
                                    <select
                                        className="w-full p-2 border rounded-lg text-sm bg-white focus:ring-2 focus:ring-brand-primary outline-none"
                                        value={selectedDevice}
                                        onChange={(e) => setSelectedDevice(e.target.value)}
                                    >
                                        {devices.map((device, idx) => (
                                            <option key={device.deviceId} value={device.deviceId}>
                                                {device.label || `Camera ${idx + 1}`}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            <div className="w-full flex space-x-3 mt-auto">
                                <button onClick={onCancel} className="flex-1 py-3 px-2 bg-gray-200 text-gray-700 rounded-xl font-bold text-xs uppercase hover:bg-gray-300 transition-colors">Cancel</button>
                                <button
                                    onClick={handleProceed}
                                    disabled={!stream}
                                    className="flex-1 py-3 px-2 bg-brand-primary text-white rounded-xl font-bold text-xs uppercase shadow-lg hover:bg-emerald-600 disabled:opacity-50 transition-all"
                                >
                                    Feed Looks Good <i className="fa-solid fa-arrow-right ml-1"></i>
                                </button>
                            </div>
                        </>
                    )}

                    {import.meta.env.DEV && (
                        <div className="w-full mt-6 pt-4 border-t-2 border-gray-200 border-dashed">
                            <button onClick={() => onReady('developer-bypass')} className="w-full py-3 bg-purple-100 text-purple-700 border-2 border-purple-300 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-purple-200 transition-colors shadow-sm">
                                <i className="fa-solid fa-code mr-2"></i> [DEV MODE] Force Bypass Error
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}