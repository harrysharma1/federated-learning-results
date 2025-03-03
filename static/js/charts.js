const mseData = [16841.215169270832, 1374.7542317708333, 313.4850260416667, 101.44694010416667, 0.5325520833333334, 10807.909830729166, 0.5660807291666666, 55.2109375, 9795.152994791666, 13246.8076171875, 10.981770833333334, 0.5550130208333334, 9627.0361328125, 0.5748697916666666, 1.1663411458333333, 213.72591145833334, 8427.992838541666, 1.2177734375, 0.8059895833333334, 0.6139322916666666, 6604.8125, 986.0485026041666, 85.30143229166667, 594.1357421875, 0.671875];
    
const psnrData = [5.867069362773799, 16.74855295665917, 23.168635597611047, 28.06841408719017, 50.86718272892081, 7.79338648112644, 50.602019902246724, 30.710552392010563, 8.220691370481441, 6.909691317487727, 37.724079842205775, 50.68777188898868, 8.29587759027644, 50.53510872985835, 47.46254764061274, 24.83223183012717, 8.873562029616481, 47.2751386402918, 49.06750931879304, 50.24959883826075, 9.932198676639475, 18.1918208294975, 28.821240374243615, 20.391946812939747, 49.85791879272212];

const ssimData = [-0.004325490098664844, 0.8532524582237063, 0.9287035392130085, 0.984404796583917, 0.9996652294978249, -0.007108649945168182, 0.9993127364457602, 0.9776547392781098, 0.0033906302522954215, -0.0036230104422351004, 0.9987926614738325, 0.9971705084992969, -0.001203268762568852, 0.9977891538604637, 0.9968986221417258, 0.9732395656857833, -0.00901004836761724, 0.9991321309733985, 0.9991200713425905, 0.9993088117736637, -0.002901369683346551, 0.9366809128655733, 0.9855910200862259, 0.9603791832487328, 0.9989665239517435];

const labels = Array.from({length: 25}, (_, i) => i + 1);

const commonOptions = {
    responsive: true,
    interaction: {
        mode: 'index',
        intersect: false,
    },
    scales: {
        x: {
            title: {
                display: true,
                text: 'Sample Index'
            }
        },
        y: {
            beginAtZero: true,
            title: {
                display: true,
            }
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

// MSE Chart
new Chart(document.getElementById('mseChart'), {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Mean Squared Error',
            data: mseData,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.1,
            fill: true
        }]
    },
    options: {
        ...commonOptions,
        plugins: {
            title: {
                display: true,
                text: 'Mean Squared Error (MSE) Over Samples'
            }
        },
        scales: {
            ...commonOptions.scales,
            y: {
                ...commonOptions.scales.y,
                title: {
                    display: true,
                    text: 'MSE Value'
                }
            }
        }
    }
});

// PSNR Chart
new Chart(document.getElementById('psnrChart'), {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Peak Signal-to-Noise Ratio',
            data: psnrData,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            tension: 0.1,
            fill: true
        }]
    },
    options: {
        ...commonOptions,
        plugins: {
            title: {
                display: true,
                text: 'Peak Signal-to-Noise Ratio (PSNR) Over Samples'
            }
        },
        scales: {
            ...commonOptions.scales,
            y: {
                ...commonOptions.scales.y,
                title: {
                    display: true,
                    text: 'PSNR Value'
                }
            }
        }
    }
});

// SSIM Chart
new Chart(document.getElementById('ssimChart'), {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'SSIM',
            data: ssimData,
            borderColor: 'rgb(153, 102, 255)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            tension: 0.1,
            fill: true
        }]
    },
    options: {
        ...commonOptions,
        plugins: {
            title: {
                display: true,
                text: 'Structural Similarity Index (SSIM) Over Samples'
            }
        },
        scales: {
            ...commonOptions.scales,
            y: {
                ...commonOptions.scales.y,
                title: {
                    display: true,
                    text: 'SSIM Value'
                },
                min: -0.5,
                max: 1.5
            }
        }
    }
});