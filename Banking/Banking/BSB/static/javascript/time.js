let d = new Date();
                    let hour = d.getHours();
                    let minute = d.getMinutes();
                    let second = d.getSeconds();
                    let ampm = hour >= 12 ? 'PM' : 'AM';
                    hour = hour % 12;
                    hour = hour ? hour : 12;
                    hour = hour < 10 ? '0' + hour : hour;
                    minute = minute < 10 ? '0' + minute : minute;
                    second = second < 10 ? '0' + second : second;
                    document.write(hour + ":" + minute + ":" + second + " " + ampm)