import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        startQR();
    }, []);

    function startQR() {
        const scanner = new Html5QrcodeScanner(
            'reader',
            {
                qrbox: { width: 250, height: 250 },
                fps: 20,
            },
            false
        );

        scanner.render(success, error);

        function success(result: any) {
            scanner.clear();
            const data = document.createElement('div');
            if (verify(result)) {
                data.innerHTML = 'verified';
            } else {
                data.innerHTML = 'not verified';
            }
            document.body.append(data);
        }

        function error(err: any) {
            // console.error('error');
        }
    }

    function verify(data: any) {
        const name = 'John Loyd Mulit';
        const id = '2020-00043';
        const personData = JSON.parse(data);

        console.log(personData);

        if (personData.name === name && personData.id === id) return true;
        return false;
    }

    return (
        <div className="App">
            <h1>QR Attendance</h1>
            <div
                id="reader"
                style={{ width: '500px' }}
            ></div>
        </div>
    );
}

export default App;
