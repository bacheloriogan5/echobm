$(document).ready(function() {
    const bankCurrencies = [
        { id: 44, code: 'rub', name: 'Сбербанк', logo: './criptacc_files/curlogos/sber.png' },
        { id: 18, code: 'rub', name: 'Т-Банк', logo: './criptacc_files/curlogos/1-4_tbank_ANfhX5Z_xV2Q80J.svg' },
        { id: 15, code: 'rub', name: 'Альфа Банк', logo: './criptacc_files/curlogos/alfa_CWKsISz_87wMiu7.svg' },
        { id: 96, code: 'rub', name: 'Открытие', logo: './criptacc_files/curlogos/123otkritie_CwllIGL.png' },
        { id: 35, code: 'rub', name: 'РНКБ', logo: './criptacc_files/curlogos/rncb.svg' },
        { id: 97, code: 'rub', name: 'Райффайзен', logo: './criptacc_files/curlogos/raiffeisenbank_O4RKjxP.svg' },
        { id: 101, code: 'rub', name: 'Русский Стандарт', logo: './criptacc_files/curlogos/rsb_pX5VPtq_Aot8h1J.svg' },
        { id: 107, code: 'rub', name: 'Россельхозбанк', logo: './criptacc_files/curlogos/rosselhozbank_GDjmJEe_P8InLvM.svg' },
        { id: 111, code: 'rub', name: 'РосБанк', logo: './criptacc_files/curlogos/rosbank_logo_jJCaWyS_cZBdq5W.png' },
        { id: 102, code: 'rub', name: 'Авангард', logo: './criptacc_files/curlogos/bank_avangard_Rh4MTKu_rcoKpeE.svg' },
        { id: 33, code: 'rub', name: 'Газпромбанк', logo: './criptacc_files/curlogos/gazprom_ABfAcgj.png' },
        { id: 103, code: 'rub', name: 'Промсвязьбанк', logo: './criptacc_files/curlogos/psbank.svg' },
        { id: 85, code: 'rub', name: 'Почта Банк', logo: './criptacc_files/curlogos/ps-pochtabank_BqHADKa.png' },
        { id: 112, code: 'rub', name: 'Хоум Кредит', logo: './criptacc_files/curlogos/homecredit_kY0ACn8_pPNsFd6.svg' },
        { id: 98, code: 'rub', name: 'МТС Банк', logo: './criptacc_files/curlogos/mtsbank_7ksHout_zWHYVg6.png' },
        { id: 16, code: 'rub', name: 'ВТБ', logo: './criptacc_files/curlogos/584073_6eu4oN8.png' },
        { id: 72, code: 'rub', name: 'МИР', logo: './criptacc_files/curlogos/mir_logo_7MYyPor.svg' },
        { id: 260, code: 'rub', name: 'СБП', logo: './criptacc_files/curlogos/sbp_icon_A815i2W.svg' }
    ];

    const toCurrencies = [
        { id: 293, code: 'btc', name: 'Bitcoin', logo: './criptacc_files/curlogos/btc.png' },
        { id: 58, code: 'bnb', name: 'Binance Coin BEP20', logo: './criptacc_files/curlogos/bnb.png' },
        { id: 4, code: 'eth', name: 'Ethereum', logo: './criptacc_files/curlogos/eth.png' },
        { id: 74, code: 'sol', name: 'Solana', logo: './criptacc_files/curlogos/solana-logo_lihVYF0.svg' },
        { id: 266, code: 'ton', name: 'TON Coin', logo: './criptacc_files/curlogos/TON_icon_bhWThpQ.svg' },
        { id: 7, code: 'ltc', name: 'Litecoin', logo: './criptacc_files/curlogos/litecoin.png' },
        { id: 55, code: 'usdt-trc', name: 'Tether TRC20', logo: './criptacc_files/curlogos/Tether_7sRqobD.png' },
        { id: 109, code: 'usdt-bep', name: 'Tether BEP20', logo: './criptacc_files/curlogos/Tether_780K3ec.png' },
        { id: 110, code: 'usdt-sol', name: 'Tether SOL', logo: './criptacc_files/curlogos/Tether_1AHBwPy.png' },
        { id: 57, code: 'usdt-erc', name: 'Tether ERC20', logo: './criptacc_files/curlogos/Tether_2zkTE3T.png' },
        { id: 59, code: 'bch', name: 'Bitcoin Cash', logo: './criptacc_files/curlogos/bch_3ulzGYW' },
        { id: 67, code: 'ada', name: 'Cardano', logo: './criptacc_files/curlogos/ada_cardano_Ozua1qd.png' },
        { id: 44, code: 'atom', name: 'Cosmos', logo: './criptacc_files/curlogos/cosmos-atom-logo_f9vb1mZ.svg' },
        { id: 26, code: 'dash', name: 'Dash', logo: './criptacc_files/curlogos/DASH.png' },
        { id: 27, code: 'doge', name: 'DogeCoin', logo: './criptacc_files/curlogos/dogecoin_KWzgIVC.svg' },
        { id: 6, code: 'etc', name: 'Ethereum Classic', logo: './criptacc_files/curlogos/etc.png' },
        { id: 68, code: 'eos', name: 'EOS', logo: './criptacc_files/curlogos/EOS_aj0P1fY.svg' },
        { id: 28, code: 'xmr', name: 'Monero', logo: './criptacc_files/curlogos/xmr.png' },
        { id: 75, code: 'dot', name: 'Polkadot', logo: './criptacc_files/curlogos/polkadot.png' },
        { id: 77, code: 'pol', name: 'Polygon', logo: './criptacc_files/curlogos/polygon-matic-logo_AaeOmY0.svg' },
        { id: 89, code: 'xrp', name: 'Ripple', logo: './criptacc_files/curlogos/RIPPLE_GW8t4HP.png' },
        { id: 60, code: 'xlm', name: 'Stellar', logo: './criptacc_files/curlogos/stellar_HmGbRq7.svg' },
        { id: 71, code: 'shib-erc', name: 'SHIBA Inu ERC20', logo: './criptacc_files/curlogos/shiba-inu-shib-logo_d4SN9SY.svg' },
        { id: 106, code: 'shib-bep', name: 'SHIBA Inu BEP20', logo: './criptacc_files/curlogos/shiba-inu-shib-logo_McLLSf2.svg' },
        { id: 29, code: 'trx', name: 'Tron', logo: './criptacc_files/curlogos/tron_sMsuYUp.svg' },
        { id: 31, code: 'zec', name: 'Zcash', logo: './criptacc_files/curlogos/Zcash_cZWketu.svg' },
        { id: 257, code: 'usdc-erc', name: 'USD Coin ERC20', logo: './criptacc_files/curlogos/usd-coin-usdc-logo_d5Z22uq.svg' },
        { id: 258, code: 'usdc-bep', name: 'USD Coin BEP20', logo: './criptacc_files/curlogos/usd-coin-usdc-logo_32uUmnE.svg' },
        { id: 259, code: 'usdc-pol', name: 'USD Coin Polygon', logo: './criptacc_files/curlogos/usd-coin-usdc-logo_wEGL8F0.svg' }
    ];

    function getFromCurrencies() {
        const currentLang = localStorage.getItem('preferred_language') || navigator.language.slice(0, 2) || 'en';
        if (currentLang === 'en') {
            return toCurrencies;
        } else {
            return [...bankCurrencies, ...toCurrencies];
        }
    }

    let fromCurrencies = getFromCurrencies();

    function formatCurrency(symbol) {
        return symbol.replace(/^(usdt|usdc|shib)([-\(].*)?$/, '$1');
    }


    // Initialize with different currencies
    let fromCurrency, toCurrency;

    // Get current language
    const currentLang = localStorage.getItem('preferred_language') || navigator.language.slice(0, 2) || 'en';

    if (currentLang === 'ru') {
        // For Russian, default to RUB -> BTC
        fromCurrency = bankCurrencies[0]; // Сбербанк
        $('._input_wrest_14').first().val('6000');
        toCurrency = toCurrencies.find(c => c.code === 'btc'); // Bitcoin
    } else {
        // For English, default to ETH -> BTC
        fromCurrency = toCurrencies.find(c => c.code === 'eth'); // Ethereum
        $('._input_wrest_14').first().val('10');
        toCurrency = toCurrencies.find(c => c.code === 'btc'); // Bitcoin
    }

    let currentModalType = null;
    let isReverse = false;
    let currentRate = 7.566149761453419e-8;

    // Initialize modal container
    if (!$('#currency-modal-container').length) {
        $('body').append('<div id="currency-modal-container"></div>');
    }

    // Click handler for currency triggers
    $(document).on('click', '._CurrencyTrigger_be7kg_8', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const isFirst = $(this).closest('._CalculatorField_jeoei_8').index() === 0;
        currentModalType = isReverse ? (isFirst ? 'to' : 'from') : (isFirst ? 'from' : 'to');
        openCurrencyModal();
    });

    function updateRateDisplay() {
        let progress = 0;
        let steps = 30;
        
        function updateProgress() {
            const dashArray = 56.548667764616276;
            const progressOffset = (progress / 30) * dashArray;
            $('.radial-progress-bar circle:last-child').css('stroke-dashoffset', progressOffset);
            $('._steps_zee5j_23').text(steps);
            
            progress++;
            steps--;
            
            if (steps < 0) {
                progress = 0;
                steps = 30;
                // Simulate rate change
                const variation = (Math.random() - 0.5) * 0.01; // ±0.5% variation
                currentRate = currentRate * (1 + variation);
            }
        }
    
        function updateRateText() {
            let rateDisplay;
            let fromCode = fromCurrency.code.toUpperCase();
            let toCode = toCurrency.code.toUpperCase();

            fromCode = formatCurrency(fromCode);
            toCode = formatCurrency(toCode);

            // Helper function to format crypto values with appropriate decimals
            const formatCryptoValue = (value) => {
                if (value >= 1) return value.toFixed(2);
                if (value >= 0.0001) return value.toFixed(6);
                return value.toFixed(8);
            };
        
            // // If either currency is RUB
            // if (fromCode === 'RUB' || toCode === 'RUB') {
            //     if (fromCode === 'RUB') {
            //         // RUB to Crypto
            //         const rate = 1 / currentRate;
            //         rateDisplay = `${rate.toFixed(0)} ${fromCode} = 1 ${toCode}`;
            //     } else {
            //         // Crypto to RUB
            //         const rate = currentRate;
            //         rateDisplay = `${rate.toFixed(0)} ${toCode} = 1 ${fromCode}`;
            //     }
            // } else {
            //     // Crypto to Crypto
            //     const rate = currentRate;
            //     rateDisplay = `${formatCryptoValue(rate)} ${toCode} = 1 ${fromCode}`;
            // }

            if(currentRate > 1) {
                const rate = currentRate;
                rateDisplay = `${formatCryptoValue(rate)} ${toCode} = 1 ${fromCode}`;
            } else {
                const rate = 1 / currentRate;
                rateDisplay = `${formatCryptoValue(rate)} ${fromCode} = 1 ${toCode}`;
            }
        
            $('._course_zee5j_31').text(rateDisplay);
        }
    
        // Initial update
        updateRateText();
        $('#currency-modal-container').data('intervals')?.forEach(clearInterval);
        
        // Set up the progress animation
        const progressInterval = setInterval(updateProgress, 1000);
        
        // Set up rate text updates
        const rateInterval = setInterval(updateRateText, 1000);
    
        // Store intervals in a data attribute for cleanup
        $('#currency-modal-container').data('intervals', [progressInterval, rateInterval]);
    }

    /*
    <div class="_DirectionsFilter_14w3a_8">
        <div class="_item_14w3a_15 __active_14w3a_35" data-filter="all">Все</div>
        <div class="_item_14w3a_15" data-filter="rub">RUB</div>
        <div class="_item_14w3a_15" data-filter="crypto">Crypto</div>
    </div>
    */
    function openCurrencyModal() {
        const currentLang = localStorage.getItem('preferred_language') || navigator.language.slice(0, 2) || 'en';
        const modalHTML = `
            <div class="_overlay_gn96g_8 __overflow_gn96g_20">
                <div class="_ModalWrapper_bd5ub_8">
                    <div class="_DirectionsModal_15gxc_8">
                        <div class="_CurrencyPicker_12a7x_8">
                            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-close" class="_icon_12a7x_26">
                                <path d="M16 2C8.2 2 2 8.2 2 16C2 23.8 8.2 30 16 30C23.8 30 30 23.8 30 16C30 8.2 23.8 2 16 2ZM21.4 23L16 17.6L10.6 23L9 21.4L14.4 16L9 10.6L10.6 9L16 14.4L21.4 9L23 10.6L17.6 16L23 21.4L21.4 23Z" fill="currentColor"/>
                            </svg>
                            <h3 class="h3">Выберите валюту</h3>
                            <div class="_VInput_19it6_8 _default_19it6_25 _primary_19it6_31">
                                <div class="_wrapper_19it6_15">
                                    <input type="text" placeholder="Поиск" class="_input_19it6_49">
                                </div>
                            </div>

                            ${currentModalType === 'from' ? `<div class="_DirectionsFilter_14w3a_8">
                                ${currentLang === 'en' ? `` : `<div class="_item_14w3a_15" style="width: auto;padding: 0 10px;" data-filter="rub">RUB</div>`}
                                <div class="_item_14w3a_15" style="width: auto;padding: 0 10px;" data-filter="crypto">Crypto</div>
                            </div>` : ``}
                            
                            <div class="_list_12a7x_35">
                                <div class="_inner_12a7x_47"></div>
                                <div class="_scrollbar_12a7x_56">
                                    <div class="_thumb_12a7x_67"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

        $('#currency-modal-container').html(modalHTML).show();

        // Get the current selections before loading the list
        const currentSelections = {
            from: fromCurrency,
            to: toCurrency
        };

        loadCurrencyList(currentSelections);
        bindModalEvents();
        initializeScroll();
    }

    function loadCurrencyList(currentSelections) {
        const currenciesList = currentModalType === 'from' ? fromCurrencies : toCurrencies;
        const $list = $('._inner_12a7x_47');
        $list.empty();

        // Get the currency to compare against (opposite of what we're selecting)
        const opposingCurrency = currentModalType === 'from' ? 
        currentSelections.to : 
        currentSelections.from;
        
        currenciesList.forEach(currency => {
            // Check if this currency should be disabled
            const isDisabled = (currency.name === opposingCurrency.name) && 
                          currency.code !== 'rub';  // Don't disable RUB options

            const itemClass = isDisabled ? 
                '_DirectionItem_9gay7_8 __disabled' : 
                '_DirectionItem_9gay7_8';

            $list.append(`
                <div class="${itemClass}" data-currency='${JSON.stringify(currency)}'>
                    <img src="${currency.logo}" alt="${currency.name}" class="_icon_9gay7_22 _first_9gay7_28">
                    <div class="_currency_9gay7_50 text-medium">${currency.code}</div>
                    <div class="_row_9gay7_43">
                        <div>${currency.name}</div>
                    </div>
                    <img src="${currency.logo}" alt="${currency.name}" class="_icon_9gay7_22">
                </div>
            `);
        });
    }


    $('<style>')
    .text(`
        ._DirectionItem_9gay7_8.__disabled {
            opacity: 0.5;
            display:none;
            cursor: not-allowed;
            pointer-events: none;
        }
    `)
    .appendTo('head');

    function bindModalEvents() {
        $('._icon_12a7x_26').on('click', closeModal);
        $('._input_19it6_49').on('input', handleSearch);
        $('._DirectionItem_9gay7_8').on('click', handleCurrencySelect);
        
        $('._DirectionsFilter_14w3a_8 ._item_14w3a_15').on('click', function() {
            const filter = $(this).data('filter');
            $('._DirectionsFilter_14w3a_8 ._item_14w3a_15').removeClass('__active_14w3a_35');
            $(this).addClass('__active_14w3a_35');
            
            $('._DirectionItem_9gay7_8').each(function() {
                const code = $(this).find('._currency_9gay7_50').text().toLowerCase();
                if (filter === 'all' || 
                    (filter === 'rub' && code === 'rub') || 
                    (filter === 'crypto' && code !== 'rub')) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
            initializeScroll();
        });
    }

    function handleSearch(e) {
        const searchTerm = $(e.target).val().toLowerCase();
        $('._DirectionItem_9gay7_8').each(function() {
            const data = JSON.parse($(this).attr('data-currency'));
            const isMatch = data.name.toLowerCase().includes(searchTerm) || 
                          data.code.toLowerCase().includes(searchTerm);
            $(this).toggle(isMatch);
        });
        initializeScroll();
    }

    function handleCurrencySelect() {
        const $item = $(this);
        
        // If item is disabled, don't proceed
        if ($item.hasClass('__disabled')) {
            return;
        }
    
        const currency = JSON.parse($item.attr('data-currency'));
        
        if (currentModalType === 'from') {
            if (isReverse) {
                toCurrency = currency;
            } else {
                fromCurrency = currency;
            }
            updateDisplay(isReverse ? 'to' : 'from', currency);
        } else {
            if (isReverse) {
                fromCurrency = currency;
            } else {
                toCurrency = currency;
            }
            updateDisplay(isReverse ? 'from' : 'to', currency);
        }
    
        closeModal();
        fetchExchangeRate();
    }
    

    function updateDisplay(type, currency) {
        const $field = type === 'from' ? 
            $('._CalculatorField_jeoei_8').first() : 
            $('._CalculatorField_jeoei_8').last();
    
        
        console.log(fromCurrency)
        console.log(toCurrency)
        $field.find('._currency_be7kg_19').text(currency.code.toUpperCase());
        $field.find('._logo_be7kg_24').attr('src', currency.logo);
    }

    function initializeScroll() {
        const $container = $('._list_12a7x_35');
        const $content = $('._inner_12a7x_47');
        const $thumb = $('._thumb_12a7x_67');
        
        const containerHeight = $container.height();
        const contentHeight = $content.prop('scrollHeight');
        const thumbHeight = Math.max(30, (containerHeight / contentHeight) * containerHeight);
        
        $thumb.height(thumbHeight);
        
        $content.off('scroll').on('scroll', function() {
            const scrollPercent = $(this).scrollTop() / (contentHeight - containerHeight);
            const thumbPosition = scrollPercent * (containerHeight - thumbHeight);
            $thumb.css('transform', `translateY(${thumbPosition}px)`);
        });
    }

    function fetchExchangeRate() {
        let cryptoId = toCurrency.code.toLowerCase();
        let fiatId = fromCurrency.code.toLowerCase();

        cryptoId = formatCurrency(cryptoId);
        fiatId = formatCurrency(fiatId);

        
        $.ajax({
            url: `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fiatId}.json`,
            method: 'GET',
            success: function(response) {
                console.log(response);
                if (response[fiatId]) {
                    // if(fiatId === 'rub') {
                    //     // RUB rates are not *accurate*, so we add a 7% margin hihi
                    //     currentRate = response[fiatId][cryptoId] + response[fiatId][cryptoId] * 0.07;
                    // } else {
                    //     currentRate = response[fiatId][cryptoId] - response[fiatId][cryptoId] * 0.07;
                    // }
                    // if(response[fiatId][cryptoId] > 1) {
                    //     currentRate = response[fiatId][cryptoId] - response[fiatId][cryptoId] * 0.02;
                    // } else {
                    //     currentRate = response[fiatId][cryptoId] + response[fiatId][cryptoId] * 0.02;
                    // }
                    //currentRate = response[fiatId][cryptoId]
                    let rate = calculateDiscountedRate(response[fiatId][cryptoId], parseFloat($('._input_wrest_14').first().val().replace(/[^0-9.]/g, '')) || 0)

                    $.ajax({
                        url: `/api/getPercent?from=${fiatId}&to=${cryptoId}`,
                        method: 'GET',
                        success: function(percentResponse) {

                            if(rate < 1) {
                                currentRate = rate / percentResponse;
                            } else if (rate === 1) {
                                console.log(rate);
                                currentRate = rate * percentResponse;
                            } else {
                                currentRate = rate * percentResponse;
                            }
                            //currentRate = response[fiatId][cryptoId]
                            console.log('Rate old:', response[fiatId][cryptoId])
                            console.log('Rate:', currentRate);
                            updateCalculation();
                            updateRateDisplay();
                        },
                        error: function() {
                            console.error('Failed to fetch percent discount');
                            if(rate < 1) {
                                currentRate = rate / 0.96;
                            } else if (rate === 1) {
                                console.log(rate);
                                currentRate = rate * 0.96;
                            } else {
                                currentRate = rate * 0.96;
                            }
                            //currentRate = response[fiatId][cryptoId]
                            console.log('Rate old:', response[fiatId][cryptoId])
                            console.log('Rate:', currentRate);
                            updateCalculation();
                            updateRateDisplay();
                        }
                    });

                    // if(rate < 1) {
                    //     currentRate = rate / 0.96;
                    // } else if (rate === 1) {
                    //     console.log(rate);
                    //     currentRate = rate * 0.96;
                    // } else {
                    //     currentRate = rate * 0.96;
                    // }
                    // //currentRate = response[fiatId][cryptoId]
                    // console.log('Rate old:', response[fiatId][cryptoId])
                    // console.log('Rate:', currentRate);

                    
                } else {
                    currentRate = 7.566149761453419e-8;
                }
                
            },
            error: function() {
                currentRate = 7.566149761453419e-8;
                updateCalculation();
                updateRateDisplay();
            }
        });
    }

    function calculateDiscountedRate(rate, amount, maxDiscountUSD = 400) {
        // Базовый снос 4.5%
        const baseDiscount = 0.045;
        
        // Рассчитываем скидку
        let discount = rate * baseDiscount;
        // Ограничиваем максимальную скидку
        if (discount * amount > maxDiscountUSD) {
            discount = maxDiscountUSD / amount;
        }

        if (rate === 1) {
            return rate;
        }
        
        // Возвращаем курс со скидкой
        return rate - discount;
    }

    function updateCalculation() {
        const fromAmount = parseFloat($('._input_wrest_14').first().val().replace(/[^0-9.]/g, '')) || 0;
        const currentLang = localStorage.getItem('preferred_language') || navigator.language.slice(0, 2) || 'en';
        // Check minimum amount for Russian locale
        // if (currentLang === 'ru' && fromCurrency.code.toLowerCase() === 'rub' && fromAmount < 3000) {
        //     //update value to 3000 rub
        //     $('._input_wrest_14').first().val('3000');
        //     return;
        // }
        const toAmount = fromAmount * currentRate;
        const displayAmount = toCurrency.code.toLowerCase() === 'rub' ? 
            toAmount.toFixed(0) : 
            toAmount.toFixed(8);
        $('._input_wrest_14').last().val(displayAmount);
    }

    function closeModal() {
        const intervals = $('#currency-modal-container').data('intervals');
        if (intervals) {
            intervals.forEach(clearInterval);
        }
        
        $('#currency-modal-container').empty();
        currentModalType = null;
    }

    let swapCooldown = false;

    $('._CalculatorSwap_1s2jl_8').on('click', function() {
        if (swapCooldown) return;

        isReverse = !isReverse;
        const tempCurrency = fromCurrency;
        fromCurrency = toCurrency;
        toCurrency = tempCurrency;

        updateDisplay('from', fromCurrency);
        updateDisplay('to', toCurrency);

        const $inputs = $('._input_wrest_14');
        const fromVal = $inputs.first().val();
        const toVal = $inputs.last().val();
        $inputs.first().val(toVal);
        $inputs.last().val(fromVal);

        currentRate = 1 / currentRate;
        setTimeout(fetchExchangeRate, 500);

        swapCooldown = true;
        setTimeout(() => {
            swapCooldown = false;
        }, 1000); // Cooldown period of 1 second
    });

    $('._input_wrest_14').on('input', function() {
        const isFirstInput = $(this).closest('._CalculatorField_jeoei_8').index() === 0;
        const inputValue = parseFloat($(this).val().replace(/[^0-9.]/g, '')) || 0;
        
        if (isFirstInput) {
            const toAmount = inputValue * currentRate;
            $('._input_wrest_14').last().val(toAmount.toFixed(8));
        } else {
            const fromAmount = inputValue / currentRate;
            $('._input_wrest_14').first().val(fromAmount.toFixed(8));
        }
    });

    $(document).on('click', '._overlay_gn96g_8', function(e) {
        if ($(e.target).hasClass('_overlay_gn96g_8')) {
            closeModal();
        }
    });

    $(document).on('keyup', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });


    $('._HomeCalculator_tphjr_8').on('submit', function(e) {
        e.preventDefault();
        
        const amount = parseFloat($('._input_wrest_14').first().val().replace(/[^0-9.]/g, ''));
        const currentLang = localStorage.getItem('preferred_language') || navigator.language.slice(0, 2) || 'en';

        // Check minimum amount for Russian locale
        if (currentLang === 'ru') {
            if(fromCurrency.code.toLowerCase() === 'rub' && amount < 6000 || toCurrency.code.toLowerCase() === 'rub' && amount * currentRate < 6000) {
                alert('Минимальная сумма обмена: 6000 RUB');
                return;
            }
        }

        const exchangeData = {
            fromCurrency: {
                id: fromCurrency.id,
                code: fromCurrency.code,
                name: fromCurrency.name,
                logo: fromCurrency.logo
            },
            toCurrency: {
                id: toCurrency.id,
                code: toCurrency.code,
                name: toCurrency.name,
                logo: toCurrency.logo
            },
            amount: parseFloat($('._input_wrest_14').first().val().replace(/[^0-9.]/g, '')),
            rate: currentRate,
            timestamp: new Date().getTime()
        };
        localStorage.setItem('lastExchange', JSON.stringify(exchangeData));
    
        window.location.href = window.remote;
    });
    
    //may cause shitass bugs
    // function restoreLastExchange() {
    //     const savedData = localStorage.getItem('lastExchange');
    //     if (savedData) {
    //         const data = JSON.parse(savedData);
    //         fromCurrency = data.fromCurrency;
    //         toCurrency = data.toCurrency;
    //         currentRate = data.rate;
            
    //         updateDisplay('from', data.fromCurrency);
    //         updateDisplay('to', data.toCurrency);
            
    //         $('._input_wrest_14').first().val(data.amount);
    //         fetchExchangeRate();
    //         updateCalculation();
    //     }
    // }

    updateDisplay('from', fromCurrency);
    updateDisplay('to', toCurrency);
    fetchExchangeRate();
    updateRateDisplay();
    //restoreLastExchange();
});

$(document).ready(function() {
  // Add burger menu HTML to body
  $('body').append(`
    <div class="_TheBurgerMenu_hsoiw_8" style="display:none">
      <div class="_wrapper_hsoiw_28">
        <div class="_content_hsoiw_47">
          <nav class="_burger_1pkaw_24">
            <ul class="_list_1pkaw_8 description">
              <li><a href="#rules" class="_link_1pkaw_34">Правила</a></li>
              <li><a href="#partners" class="_link_1pkaw_34">Партнерам</a></li>
              <li><a href="#aml-kyc" class="_link_1pkaw_34">AML/KYC</a></li>
              <li><a href="#faq" class="_link_1pkaw_34">FAQ</a></li>
              <li><a href="#contacts" class="_link_1pkaw_34">Контакты</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  `);

  // Toggle menu
  $('._burger_4uplv_50').click(function() {
    $('._TheBurgerMenu_hsoiw_8').fadeToggle();
    $('._wrapper_hsoiw_28').toggleClass('__opened_hsoiw_52');
  });

  // Close menu when clicking outside
  $(document).click(function(e) {
    if (!$(e.target).closest('._burger_4uplv_50, ._wrapper_hsoiw_28').length) {
      $('._TheBurgerMenu_hsoiw_8').fadeOut();
      $('._wrapper_hsoiw_28').removeClass('__opened_hsoiw_52');
    }
  });

  // Prevent menu closing when clicking inside
  $('._wrapper_hsoiw_28').click(function(e) {
    e.stopPropagation();
  });
});


$(document).ready(function() {
   
    // Check if we're on AML/KYC page
    function loadAmlKyc() {
      $('main').html(`
         <style>
       ._content_6qyfp_23 {
         max-height: 0;
         opacity: 0;
         overflow: hidden;
         transition: all 0.3s ease;
       }
       .show {
         max-height: 1000px;
         opacity: 1;
         display: flex !important;
       }
     </style>
        <div class="container _AmlKycPage_1nwr6_8">
        <h1 class="_title_b6l0e_8">Политика AML/KYC</h1>
        <div class="_wrapper_b6l0e_19"><div class="_wrapper_1nwr6_12">
        <p> Администрация сервиса, понимая общественную опасность преступлений, связанных с отмыванием денежных средств и финансированием террористической деятельности, одобрила комплекс организационно-правовых мер, с целью соблюдения положений национального законодательства, а также требований межправительственной организации FATF. </p>
        <div class="_VAccordion_6qyfp_8"><div class="_trigger_6qyfp_16" role="button" aria-expanded="false">
        <div class="h3 text-semi-bold _title_6qyfp_62">KYC-проверка: что это и где используется?</div>
        <div class="_DropdownTrigger_zep1o_8"><div class="_circle_zep1o_12">
        <svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="icon-frame _icon_zep1o_27"><path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path></svg>
        </div>
        </div>
        </div>
        <div class="_content_6qyfp_23">
        <p>Что такое KYC-процедура и почему ей уделяют так много внимания? Рассказываем, как она сможет уберечь вас от мошенников, сохранив анонимность. KYC- и AML-проверки: для чего нужна верификация личности в криптовалютной сфере. KYC (Know Your Customer) – процедура верификации личности клиента и оценки потенциальных рисков от него. Но зачем она нужна и почему сегодня практически невозможно купить криптовалюту, не подтвердив свою личность? Не противоречит ли это изначальным принципам анонимности и децентрализации криптоиндустрии? Сегодня мы разберем, для чего нужны AML- и KYC-проверки и как они работают. Также расскажем, как верификация поможет уменьшить количество мошенников, сохраняя при этом базовую анонимность пользователей.</p></div></div><div class="_VAccordion_6qyfp_8"><div class="_trigger_6qyfp_16" role="button" aria-expanded="false"><div class="h3 text-semi-bold _title_6qyfp_62">Что такое AML и для чего он нужен?</div>
        <div class="_DropdownTrigger_zep1o_8">
        <div class="_circle_zep1o_12"><svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="icon-frame _icon_zep1o_27"><path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path></svg></div></div></div>
        <div class="_content_6qyfp_23">
        <p>Anti-Money Laundering – комплекс мер по противодействию отмыванию средств, финансированию терроризма и созданию оружия массового уничтожения. Эта процедура включает в себя идентификацию, хранение и взаимный обмен информацией о клиентах, их прибыли и транзакциях между финансовыми организациями и государственными ведомствами. Большинство классических финансовых институтов используют AML-меры для проверки бизнеса, работающего с наличными или использующего нал как один из основных активов. Также они проверяют те предприятия, которые имеют деньги на разных счетах, регулярно переводят их в другие страны и банки, покупают фьючерсы и другие инструменты для наличного расчета. Другими словами, под верификацию попадают все бизнесы, которые потенциально могут обходить финансовый мониторинг и отмывать средства.</p>
        </div></div>
        <div class="_VAccordion_6qyfp_8">
        <div class="_trigger_6qyfp_16" role="button" aria-expanded="false">
        <div class="h3 text-semi-bold _title_6qyfp_62">Что показывает проверка адреса?</div>
        <div class="_DropdownTrigger_zep1o_8"><div class="_circle_zep1o_12">
        <svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="icon-frame _icon_zep1o_27"><path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path></svg></div></div></div>
        <div class="_content_6qyfp_23"><p>Общий риск (в процентах) – вероятность того, что адрес связан с нелегальной деятельностью. Источники риска – известные типы сервисов, с которыми адрес взаимодействовал, и процент средств принятых с / отданных на эти сервисы, по которым рассчитывается общий риск.</p></div></div><div class="_VAccordion_6qyfp_8"><div class="_trigger_6qyfp_16" role="button" aria-expanded="false"><div class="h3 text-semi-bold _title_6qyfp_62">Почему сервисы настаивают на AML-процедурах?</div><div class="_DropdownTrigger_zep1o_8"><div class="_circle_zep1o_12"><svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="icon-frame _icon_zep1o_27"><path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path></svg></div></div></div><div class="_content_6qyfp_23"><p>Если сервис не будет проводить подобные проверки, то мошенники могут использовать его как платформу для отмывания средств и финансирования терроризма. И тогда к ответственности привлекут сам сервис. Именно поэтому биржи и другие крупные криптовалютные компании имплементируют AML-требования в свой бизнес и проводят регулярные KYC-верификации.</p></div></div><div class="_VAccordion_6qyfp_8"><div class="_trigger_6qyfp_16" role="button" aria-expanded="false"><div class="h3 text-semi-bold _title_6qyfp_62">Как понимать оценку риска?</div><div class="_DropdownTrigger_zep1o_8"><div class="_circle_zep1o_12"><svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="icon-frame _icon_zep1o_27"><path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path></svg></div>
        </div></div><div class="_content_6qyfp_23">
        <p>- 0−25% − это чистый кошелек/транзакция; 
- 25−75% − это средний уровень риска;  
- 75%+ − такой кошелек/транзакция считаются рискованной  

Риск больше 50%, но я уверен, что адрес надежный. Как быть? Результаты проверки основаны на международных базах, которые постоянно обновляются. Поэтому адрес, который имел 0% риска вчера, сегодня мог получить или отдать актив рисковому контрагенту. В этом случае оценка риска изменится.</p>
</div>
</div>
<div class="_VAccordion_6qyfp_8">
<div class="_trigger_6qyfp_16" role="button" aria-expanded="false">
<div class="h3 text-semi-bold _title_6qyfp_62">Что делать если мои средства были заблокированы?</div>
<div class="_DropdownTrigger_zep1o_8"><div class="_circle_zep1o_12">
<svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="icon-frame _icon_zep1o_27"><path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path></svg></div></div></div><div class="_content_6qyfp_23"><h4>Для подтверждения происхождения средств мы просим пользователей в полном объеме ответить на следующие вопросы:</h4><ul><li>- посредством какой платформы средства поступили к вам? По возможности, пожалуйста, предоставьте скриншоты из истории выводов кошелька/платформы отправителя, а также ссылку на транзакцию в обозревателе;</li><li>- за какую услугу вы получили средства;</li><li>- на какую сумму была транзакция, а также дата и время ее проведения; - через какое контактное лицо вы общались с отправителем средств? По возможности, пожалуйста, предоставьте скриншоты переписки с отправителем, где мы можем увидеть подтверждение отправки средств.</li><li>- через какое контактное лицо вы общались с отправителем средств? По возможности, пожалуйста, предоставьте скриншоты переписки с отправителем, где мы можем увидеть подтверждение отправки средств.</li><li>- скриншоты вывода с платформы, откуда контрагент переводил вам средства, на котором будут видны детали транзакции.</li></ul><p>В случае, если ваша транзакция была заблокирована, обмен средств не представляется возможным, заявка будет заблокирована. Средства могут быть возвращены ТОЛЬКО на адрес отправителя. При возврате средств может взыматься комиссия до 10% от суммы обмена или на сумму комиссии сети, в которой производился обмен.</p></div></div></div></div></div>
      `);
    }

    if(window.location.hash === '#aml-kyc') {
        loadAmlKyc();
      }
     
      // Check hash on hash change
    //   $(window).on('hashchange', function() {
    //     if(window.location.hash === '#aml-kyc') {
    //       loadAmlKyc(); 
    //     }
    //   });
     
      // Handle clicks on aml-kyc links
      $('a[href="#aml-kyc"]').click(function(e) {
        e.preventDefault();
        window.location.hash = 'aml-kyc';
        window.location.reload();
      });


      // Handle accordion toggles
      $('._trigger_6qyfp_16').click(function() {
        console.log($(this).find('._circle_zep1o_12').toggleClass('rotated'));
        $(this).find('._circle_zep1o_12').toggleClass('rotated');
        console.log($(this).next('._content_6qyfp_23').toggleClass('show'));
        $(this).next('._content_6qyfp_23').toggleClass('show');
        $(this).attr('aria-expanded', $(this).attr('aria-expanded') === 'true' ? 'false' : 'true');
      });
   
      // Add CSS for rotation animation
      $('<style>')
        .text(`
          ._circle_zep1o_12.rotated svg {
            transform: rotate(180deg);
          }
          ._circle_zep1o_12 svg {
            transition: transform 0.3s ease;
          }
          ._content_6qyfp_23 {
            display: none;
          }
        `)
        .appendTo('head');
});


$(document).ready(function() {
    // Check if we're on rules page
    function loadRules() {
        $('main').html(`
            <style>
                ._content_6qyfp_23 {
                    max-height: 0;
                    opacity: 0;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }
                .show {
                    max-height: none;
                    opacity: 1;
                    display: flex !important;
                }
            </style>
            <div class="container _RulesPage_1ds58_8">
                <h1 class="_title_b6l0e_8">Правила обмена</h1>
                <div class="_wrapper_b6l0e_19">
                    <div class="_wrap_1ds58_12">
                        <!-- Правила и условия предоставления услуг -->
                        <div class="_VAccordion_6qyfp_8">
                            <div class="_trigger_6qyfp_16" role="button" aria-expanded="false">
                                <div class="h3 text-semi-bold _title_6qyfp_62">1. Правила и условия предоставления услуг</div>
                                <div class="_DropdownTrigger_zep1o_8">
                                    <div class="_circle_zep1o_12">
                                        <svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="icon-frame _icon_zep1o_27">
                                            <path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="_content_6qyfp_23">
                                <div class="_RulesDocument_8a7pb_8">
                                    <ol><li>Общие положения <p>Настоящее соглашение (далее по тексту Соглашение) регулирует отношение между  и Пользователями сайта . Использование, а также любые действия на страницах сервиса  связанные с обменом валют означают, что пользователь согласен с условиями Соглашения. Если вы не согласны с изложенными ниже правилами, использование сервиса не допускается.</p><p>Настоящим вы соглашаетесь и подтверждаете, что вы: достигли установленного законом возраста, необходимого для принятия данного Соглашения; вам не приостанавливали и не запрещали использование Сервисов ранее.</p><!----></li><li>Термины и определения используемые в соглашении <!----><ol><li> ("Сервис") - это сервис, предоставляющий услуги обмена цифровой и электронной валюты, расположенный по адресу в сети Интернет.</li><li>Пользователь - это любое физическое лицо, которое желает воспользоваться услугами сервиса  и приняло все условия Соглашения.</li><li>Цифровая валюта - любая валюта с использованием технологии блокчейн, а также других криптографических или шифровальных средств.</li><li>Электронная валюта - денежные средства, находящиеся на счетах Пользователей сторонних платежных систем.</li><li>Средства - цифровая и/или электронная валюта.</li><li>Платежная система - продукт, созданный третьей стороной, обладающий системой правил, процедур, а также технической инфраструктуры, обеспечивающий перевод стоимости от одного субъекта экономики другому.</li><li>Платеж - перевод электронной и/или цифровой валюты от плательщика к получателю.</li><li>Заявка - выражение намерения Пользователя воспользоваться услугами Сервиса , путем заполнения электронной формы через Интернет-сайт сервиса, на условиях, описанных в данном Соглашении и указанных в параметрах данной заявки.</li><li>Пользователь и  - совместно именуются "Стороны".</li><li>Обмен валюты - обмен цифровой или электронной валюты одной платежной системы, на цифровую или электронную валюты другой платежной системы.</li><li>Курс - стоимостное соотношение двух обмениваемых активов.</li><li>Резервы валют - суммы имеющихся в наличии у Сервиса цифровых финансовых активов и денежных средств для совершения услуг. Суммы резервов указаны на Интернет-сайте Сервиса на главной странице.</li><li>Реквизит(-ы) - это совокупность значений, необходимых для проведения безналичного платежа, зачисления или списания электронной и/или цифровой валюты.</li><li>Результирующая валюта – электронная валюта, которую Пользователь получает в результате продажи или обмена Исходной валюты.</li><li>Резерв валюты - имеющийся в распоряжении Сервиса , на момент создания Заявки, объем определенной Электронной валюты.</li><li>Интернет-сайт Сервиса</li></ol></li><li>Вступление Соглашения в силу <!----><ol><li>В момент начала формирования заявки Пользователь автоматически принимает настоящее Соглашение, заключенное на условиях публичной оферты.</li><li>Публичной офертой признается любая отображаемая Сервисом информация на Интернет-сайте сервиса, в том числе отображаемая в процессе оформления Заявки.</li><li>Сервис автоматически фиксирует дату и время, курс, и направление обмена после завершения создания заявки.</li><li>Соглашение публикуется Сервисом на его Интернет-сайте, изменения могут вноситься без уведомления Пользователя.</li><li>После получения средств Пользователем по Заявке в полном объеме, Соглашение прекращает свое действие.</li></ol></li><li>Предмет соглашения <!----><ol><li>Данное Соглашение отражает услуги обмена цифровой и/или электронной валюты, осуществляемые с помощью формы Заявки, а также любые другие услуги, доступные на Интернет-сайте Сервиса.</li><li>Сервис в праве регулировать курсы обмена, о чем уведомляет Пользователей Сервиса размещением актуальной информации на Интернет-сайте Сервиса.</li><li>В Заявке, создаваемой Пользователем на Интернет-сайте Сервиса, указывается направление обмена, дата и время, а также общая сумма цифровой и/или электронной валюты перечисляемая Пользователю.</li></ol></li><li>Порядок оказания услуг Сервисом <!----><ol><li>Сервис  предоставляет услуги с помощью формы Заявки, расположенной на Интернет-сайте Сервиса.</li><li>Сервис взимает комиссию за услуги обмена. Вознаграждение Сервиса вычитается из суммы Результирующей валюты и отражена в Заявке.</li><li>Курс обмена Сервис  устанавливает сам и публикует на Интернет-сайте Сервиса.</li><li>Сервис вправе устанавливать финансовые и количественные лимиты на Операции. Информация о лимитах указывается на Интернет-сайте Сервиса в разделе Резервы.</li><li>Сервис  не проверяет правомочность и законность владения Пользователем электронной и/или цифровой валюты, участвующими в конкретной Заявке.</li><li>Пользователь подтверждает, что средства и криптовалютный адрес с которого были отправлены средства, принадлежат ему и являются его на законных основаниях.</li><li>После выполнения заявки Сервисом , и поступления средств на счёт Пользователя, Пользователь не может отменить заявку и потребовать возврата средств.</li><li>Если пользователь допустил ошибку в заполнении реквизитов и средства были отправлены на ошибочный реквизит, заявка считается выполненной и Сервис не несет за это ответственности.</li><li>В случае неоплаты Пользователем заявки в течение 30 минут с момента ее создания, Сервис расторгает договор в одностороннем порядке.</li><li>В случае расторжения соглашения, поступившие позже установленного выше срока средства будут возвращены Пользователю с учетом комиссии за перевод, если оная имеется. В случае задержки не по вине Сервиса, время возврата может быть увеличено до выяснения обстоятельств задержки.</li><li>Если на счет Сервиса поступает сумма, отличающаяся от указанной в заявке, Сервис делает перерасчет, который соответствует фактическому поступлению средств. Если данная сумма превышает указанную в заявке более чем на 10%, Сервис расторгает договор в одностороннем порядке и все средства возвращаются на реквизиты Пользователя, с учетом вычтенной суммы на комиссионные расходы во время перевода.</li><li>Если в течение 12 часов Пользователь не получил Средства, полагающиеся ему по Заявке, он может потребовать ее аннулирование и возврат средств.</li><li>Если средства были отправлены Пользователю, Заявка не может быть аннулирована.</li><li>В случае аннулирования заявки, возврат средств будет исполнен в течение 12 часов с момента аннулирования заявки. В случае аннулирования заявки не по вине сервиса, Пользователь обязуется оплатить все комиссионные расходы.</li><li>Сервис имеет право отменить Заявку и вернуть Пользователю средства с возмещением комиссии без объяснения причин.</li><li>Любое нарушение правил Пользователем, дает право Сервису разорвать Соглашение в одностороннем порядке и отказать в обслуживании, средства в данном случае возвращены не будут.</li><li>После отказа Сервиса в обслуживании, Пользователь более не имеет права пользоваться услугами Сервиса . Все последующие заявки будут заморожены.</li><li>Сервис имеет право затребовать у Пользователя любые документы, подтверждающие факт оплаты Пользователем Заявки, а также в случае блокировки средств Пользователя в связи с AML/KYC политикой Сервиса. В случае, если Пользователь отказывается подтвердить факт оплаты или верифицировать себя в случае блокировки средств в связи с AML/KYC политикой Сервиса, Сервис имеет право расторгнуть договор в одностороннем порядке без возврата средств.</li><li>Все средства, поступившие в адрес Сервиса и невостребованные в течение 14 дней будут утеряны. Поиск и возврат подобных переводов невозможен.</li><li>В случае, если Пользователь указал неверные реквизиты, у него есть 30 дней с создания заявки для изменения реквизитов, для этого он должен связаться с Сервисом любым доступным ему способом.</li><li>При поступлении от Пользователя суммы, размер которой отличается от указанной в заявке, сервис  может пересчитать заявку и обработать ее без уведомления.</li><li>Любые налоги, связанные с цифровыми и/или электронными валютами, полученными от Сервиса, Пользователь обязуется оплачивать сам.</li><li>При отправке Пользователем цифровой валюты Bitcoin, Сервис выполнит заявку только после одного подтверждения транзакции.</li><li>Сервис в праве потребовать у Пользователя создать заявку заново, в случае, если цифровая и/или электронная валюта, отправленная Пользователем, поступила на счет Сервиса только после 30 минут с создания заявки.</li><li>Сервис нельзя использовать для проведения незаконных операций. Пользователь дает согласие на привлечение к ответственности за попытку обмена сомнительных средств, в соответствии с нормами государства, в пределах которого совершено нарушение.</li><li>Если будет доказана незаконность платежа, то Сервис вправе предоставить информацию об этом по требованию правоохранительных органов, системы платежей либо потерпевшей стороны.</li><li>В случае, если транзакция будет идентифицирована как высокорискованная, обменный пункт может приостановить обменную операцию до проведения проверки в соответствии со стандартами FATF, в целях противодействия легализации доходов, полученных преступным путем, и финансированию терроризма.</li><!--<li>При оплате по направлению ЮMoney, обменный пункт в праве заморозить заявку на срок от 24 до 48 часов для проверки платежа.</li>--><li>Сервис  не работает/не отправляет/не принимает средства от "теневых площадок". Под термином "теневая площадка" имеется ввиду любой сайт, который нарушает/может нарушать законы РФ. В случае обнаружения факта отправки/приема средств на "теневую площадку", средства будут заморожены, клиент заблокирован, все данные могут быть переданы в правоохранительные органы.</li></ol></li><li>Ответственность сторон <!----><ol><li>Сервис функционирует круглосуточно, но не гарантирует работу на время аппаратных проблем, стихийных бедствий и любых других сбоев или форс-мажорных ситуаций, и не несет ответственности за любые издержки Пользователя, возникшие в результате отсутствия доступа к Интернет-сайту Сервиса.</li><li>Сервис не предоставляет никаких дополнительных гарантий, все условия и позиции описаны на Интернет-сайте Сервиса.</li><li>Сервис несет ответственность за вверенные ему средства Пользователем.</li><li>Сервис не несет никакой ответственности в случае ошибок, сбоев или любых других проблем возникающих на стороне платежных систем, и упущенную в результате этого Пользователем прибыль.</li><li>В случае, если сервис понес убытки из-за действий Пользователя, или прямо и косвенно связанные с ним, Пользователь гарантирует возмещение данных убытков.</li><li>Пользователь обязуется никак не вмешиваться в программный код или аппаратную часть, или любые другие службы, связанные с функционированием Сервиса. В ином случае, Пользователь осознает, что Сервис оповестит о нарушениях правоохранительные органы.</li><li>В случае, если Сервис подозревает Пользователя в негативном влиянии на работу Сервиса, все заявки Пользователя будут заморожены.</li><li>В случае, если задержки или неисполнения оплаты заявки в следствии непреодолимой силы, Стороны не будут ответственны друг перед другом.</li><!--<li>Граждан и налоговых резидентов Соединённых Штатов Америки Сервис не обслуживает, любые заявки, созданные в обход правил, будут аннулированы.</li>--><li>Сайт не предоставляет возможности зачисления иностранной валюты на счета валютных резидентов РФ.</li></ol></li><li>Порядок решения споров и разногласий <!----><ol><li>Все споры и разногласия, возникшие или могущие возникнуть из настоящего Соглашения, подлежат разбору либо на сайте Сервиса c помощью чата с Оператором, либо на почте, указанной на странице Контакты на сайте Сервиса. Сервис  после получения от Пользователя претензии обязан в течение 24 часов удовлетворить заявленные в претензии требования либо направить Пользователю мотивированный отказ.</li></ol></li><li>Заключительные положения <!----><ol><li>Сервис  имеет право отправлять Пользователю на указанный в заявке e-mail сведения о статусе обмена, т.к. это является неотъемлемой частью процесса успешного завершения обмена.</li><li>Вся информация, графические изображения, текст, программный код и т.п. является собственностью сайта  и охраняется законом.

Соглашение опубликовано «23» сентября 2020 года.</li></ol></li></ol>
                                </div>
                            </div>
                        </div>

                        <!-- Соглашение об использование файлов Cookie -->
                        <div class="_VAccordion_6qyfp_8">
                            <div class="_trigger_6qyfp_16" role="button" aria-expanded="false">
                                <div class="h3 text-semi-bold _title_6qyfp_62">2. Соглашение об использование файлов Cookie</div>
                                <div class="_DropdownTrigger_zep1o_8">
                                    <div class="_circle_zep1o_12">
                                        <svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="icon-frame _icon_zep1o_27">
                                            <path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="_content_6qyfp_23">
                                <div class="_RulesDocument_8a7pb_8">
                                    <ul><li>Интернет-сайт  (далее — «Сайт») использует файлы cookie и схожие технологии, чтобы гарантировать максимальное удобство пользователям, предоставляя персонализированную информацию, запоминая предпочтения при навигации по сайту и его последующих посещениях, а также помогая получить нужную пользователю информацию. Информация, которую мы получаем посредством файлов cookie, помогает нам предоставлять Вам наши услуги в наиболее подходящем для Вас виде. <!----><!----></li><li>Данное соглашение касается использования Сайтом информации, получаемой от пользователей Сайта. В этом документе также содержится информация о файлах cookie, об использовании файлов cookie Сайтом, а также о том, как вы можете отказаться от такого рода файлов. <!----><!----></li><li>Файл cookie – небольшой текстовый файл, размещаемый интернет-сайтом на персональном компьютере, телефоне либо другом устройстве пользователя с информацией о его навигации по интернет-сайту. В файлах cookie хранится информация о Ваших предпочтениях в интернете. <!----><!----></li><li>Файлы cookie используются в различных целях, в том числе, чтобы: 
• Анализировать информацию о посещении страниц пользователями для совершенствования Сайта.
• Предоставлять сообщения и контент, созданные нами и третьими лицами, на данном сайте и сайтах других лиц, учитывая интересы пользователя.
• Помогать пользователю в получении необходимой информации.
• Определять количество посетителей и то, как они используют наш сайт, — для повышения эффективности сайта и для наилучшего понимания интересов их аудитории. <!----><!----></li><li>Прежде чем интернет-сайт установит файлы cookie на вашем компьютере, вы увидите всплывающее окно с просьбой дать согласие на установку этих файлов cookie. Предоставляя свое согласие на настройку наших файлов cookie, Вы даете нам возможность предоставлять Вам наилучшие возможности и обслуживание через наш интернет-сайт. Если вы хотите отказать в своем согласии на размещение файлов cookie, некоторые функции интернет-сайта могут работать не полностью или не по назначению.
Ни один из файлов cookie, установленных сайтом, никоим образом не ставит под угрозу вашу конфиденциальность. В используемых нами файлах cookie мы не сохраняем личную и конфиденциальную информацию, которая идентифицирует личность пользователя, такую как адрес, пароль, данные дебетовой или кредитной карты и т.д. Если Вы хотите избежать использование файлов cookie на данном интернет-сайте, то Вы можете в любой момент отключить сохранение файлов cookie в своем браузере, а затем удалить сохраненные в Вашем браузере файлы cookie, связанные с использованием нашего сайта. <!----><!----></li><li>Обратите внимание: в таком случае отображение страниц и руководство по использованию интернет-сайта будут ограниченными.
Мы не несем ответственность за контент, способы сбора и обработки информации сторонними сайтами, в том числе сайтами, ссылки на которые могут быть опубликованы на нашем ресурсе. Пожалуйста, ознакомьтесь с политикой конфиденциальности тех ресурсов, которые Вы посещаете, прежде чем предоставлять свои данные. <!----><!----></li></ul>
                                </div>
                            </div>
                        </div>

                        <!-- Политика обработки персональных данных -->
                        <div class="_VAccordion_6qyfp_8">
                            <div class="_trigger_6qyfp_16" role="button" aria-expanded="false">
                                <div class="h3 text-semi-bold _title_6qyfp_62">3. Политика обработки персональных данных</div>
                                <div class="_DropdownTrigger_zep1o_8">
                                    <div class="_circle_zep1o_12">
                                        <svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="icon-frame _icon_zep1o_27">
                                            <path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="_content_6qyfp_23">
                                <div class="_RulesDocument_8a7pb_8">
                                    <ol><li>Общие положения <!----><ol><li>Настоящий документ определяет политику сайта  (далее – Оператор) в отношении обработки персональных данных пользователей сайта и излагает систему основных принципов, применяемых в отношении обработки персональных данных.</li><li>Политика в отношении обработки персональных данных пользователей сайта(далее - Политика) разработана с целью соблюдения требований законодательства Российской Федерации, содержащих персональные данные и идентификации пользователей, находящихся на сайте. Политика действует в отношении всех персональных данных, которые подлежат обработке Оператором.</li><li>Политика разработана в соответствии с Конституцией Российской Федерации, Гражданским кодексом Российской Федерации, Федеральным законом от 27 июля 2006 года № 152-ФЗ «О персональных данных» и иным действующим законодательством Российской Федерации в области защиты персональных данных.</li><li>Политика устанавливает порядок обработки персональных данных пользователей сайта: действия по сбору, систематизации, накоплению, хранению, уточнению (обновлению, изменению), уничтожению персональных данных.</li><li>Политика устанавливает обязательные для сотрудников Оператора, задействованных в обслуживании сайта, общие требования и правила по работе со всеми видами носителей информации, содержащими персональные данные пользователей сайта.</li><li>В Политике не рассматриваются вопросы обеспечения безопасности персональных данных, отнесенных в установленном порядке к сведениям, составляющим государственную тайну Российской Федерации.</li><li>Термины и определения
• Персональные данные – любая информация, относящаяся прямо или косвенно к определенному или определяемому физическому лицу (субъекту персональных данных). 
• Оператор – государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с другими лицами организующие и (или) осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными. 
• Обработка персональных данных - любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных. 
• Пользователь - пользователь сети Интернет и, в частности, сайта .
• Автоматизированная обработка персональных данных – обработка персональных данных с помощью средств вычислительной техники. 
• Предоставление персональных данных – действия, направленные на раскрытие персональных данных определенному лицу или определенному кругу лиц. 
• Блокирование персональных данных – временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных). 
• Уничтожение персональных данных – действия, в результате которых становится невозможным восстановить содержание персональных данных в информационной системе персональных данных и/или в результате которых уничтожаются материальные носители персональных данных. 
• Обезличивание персональных данных – действия, в результате которых становится невозможным без использования дополнительной информации определить принадлежность персональных данных к конкретному субъекту персональных данных.</li><li>Оператор обеспечивает конфиденциальность и безопасность персональных данных при их обработке в соответствии с требованием законодательства и не раскрывает третьим лицами и не распространяет персональные данные без согласия на это субъекта персональных данных, если иное не предусмотрено федеральным законодательством. В соответствии с перечнем персональных данных, обрабатываемых на сайте, персональные данные пользователей сайта являются конфиденциальной информацией.</li></ol></li><li>Основные права и обязанности Оператора и Субъекта персональных данных. <!----><ol><li>Оператор имеет право:
• получать персональные данные от субъектов персональных данных и от третьих лиц (лиц, не являющихся субъектами персональных данных), при этом Оператор выполняет обязанности, предусмотренные Федеральным законом от 27 июля 2006 года № 152-ФЗ «О персональных данных»;
• самостоятельно определять состав и перечень мер, необходимых и достаточных для обеспечения выполнения обязанностей, предусмотренных Законом о персональных данных и принятыми в соответствии с ним нормативными правовыми актами, если иное не предусмотрено Законом о персональных данных или другими федеральными законами;
• в случае отзыва субъектом персональных данных согласия на обработку персональных данных Оператор вправе продолжить обработку персональных данных без согласия субъекта персональных данных при наличии оснований, указанных в Законе о персональных данных.</li><li>Оператор обязан:
• организовывать обработку персональных данных в соответствии с требованиями Закона о персональных данных;
• отвечать на обращения и запросы субъектов персональных данных и их законных представителей в соответствии с требованиями Закона о персональных данных.</li><li>Субъект персональных данных имеет право:
• получать информацию, касающуюся обработки его персональных данных, за исключением случаев, предусмотренных федеральными законами. Сведения предоставляются субъекту персональных данных Оператором в доступной форме, и в них не должны содержаться персональные данные, относящиеся к другим субъектам персональных данных, за исключением случаев, когда имеются законные основания для раскрытия таких персональных данных. Перечень информации и порядок ее получения установлен Законом о персональных данных;
• требовать от оператора уточнения его персональных данных, их блокирования или уничтожения в случае, если персональные данные являются неполными, устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки;
• иные права, предусмотренные главой 3 Федерального закона от 27 июля 2006 года № 152-ФЗ «О персональных данных»</li></ol></li><li>Цели сбора персональных данных <!----><ol><li>Обработка персональных данных ограничивается достижением конкретных, заранее определенных и законных целей. Не допускается обработка персональных данных, несовместимая с целями сбора персональных данных.</li><li>Обработке подлежат только персональные данные, которые отвечают целям их обработки.</li><li>Обработка персональных данных пользователей сайта осуществляется исключительно в целях предоставления пользователю возможности взаимодействовать с сайтом.</li><li>Сведениями, составляющими персональные данные на сайте, является любая информация, относящаяся к определенному или определяемому на основании такой информации физическому лицу (субъекту персональных данных).</li></ol></li><li>Объем обрабатываемых персональных данных. <!----><ol><li>Содержание и объем обрабатываемых персональных данных пользователей сайта соответствует заявленным целям обработки, предусмотренным в разделе 3 настоящей Политики. Обрабатываемые персональные данные не должны быть избыточными по отношению к заявленным целям их обработки.</li><li>Оператор может обрабатывать следующие персональные данные пользователей:
• источник захода на сайт (сайты) и информация поискового или рекламного запроса;
• данные о пользовательском устройстве (среди которых разрешение, версия и другие атрибуты, характеризующие пользовательское устройство);
• пользовательские клики, просмотры страниц, заполнения полей, показы и просмотры баннеров и видео;
• данные, характеризующие аудиторные сегменты;
• параметры сессии;
• данные о времени посещения;
• идентификатор пользователя, хранимый в cookie;
• фамилия;
• имя;
• отчество;
• номер контактного телефона;
• адрес электронной почты;</li><li>Оператором не осуществляется обработка специальных категорий персональных данных, касающихся расовой, национальной принадлежности, политических взглядов, религиозных или философских убеждений, состояния здоровья, интимной жизни, за исключением случаев, предусмотренных законодательством Российской Федерации.</li><li>Оператор не осуществляет обработку биометрических персональных данных.</li><li>Оператор не осуществляет трансграничную передачу персональных данных.</li></ol></li><li>Порядок и условия обработки персональных данных. <!----><ol><li>Обработка персональных данных осуществляется Оператором в соответствии с требованиями законодательства Российской Федерации.</li><li>Обработка персональных данных осуществляется с согласия субъектов персональных данных на обработку их персональных данных, а также без такового в случаях, предусмотренных законодательством Российской Федерации.</li><li>Оператор осуществляет как автоматизированную, так и неавтоматизированную обработку персональных данных.</li><li>К обработке персональных данных допускаются работники Оператора, в должностные обязанности которых входит обработка персональных данных.</li><li>Не допускается раскрытие и предоставление третьим лицам и распространение персональных данных без согласия субъекта персональных данных, если иное не предусмотрено федеральным законом.</li><li>Передача персональных данных органам дознания и следствия, в Федеральную налоговую службу, Пенсионный фонд Российской Федерации, Фонд социального страхования и другие уполномоченные органы исполнительной власти и организации осуществляется в соответствии с требованиями законодательства Российской Федерации.</li><li>Оператор принимает необходимые правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, распространения и других несанкционированных действий, в том числе: • определяет угрозы безопасности персональных данных при их обработке; • принимает локальные нормативные акты и иные документы, регулирующие отношения в сфере обработки и защиты персональных данных; • создает необходимые условия для работы с персональными данными; • организует учет документов, содержащих персональные данные; • организует работу с информационными системами, в которых обрабатываются персональные данные; • хранит персональные данные в условиях, при которых обеспечивается их сохранность и исключается неправомерный доступ к ним.</li><li>Оператор осуществляет хранение персональных данных в форме, позволяющей определить субъекта персональных данных, не дольше, чем этого требуют цели обработки персональных данных, если срок хранения персональных данных не установлен федеральным законом, договором.</li><li>При сборе персональных данных, в том числе посредством информационно-телекоммуникационной сети Интернет, Оператор обеспечивает запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение персональных данных граждан Российской Федерации с использованием баз данных, находящихся на территории Российской Федерации, за исключением случаев, указанных в Законе о персональных данных.</li></ol></li><li>Порядок и сроки хранения персональных данных. <!----><ol><li>Оператор осуществляет только хранение персональных данных Пользователей на Сайте.</li><li>Срок хранения персональных данных пользователей начинает течь с момента дачи согласия на обработку персональных данных, получаемого путем акцепта оферты, не требующей двустороннего подписания и действительной в электронном виде, и действуют до тех пор, пока пользователь не заявит о своем желании удалить свои персональные данные с сайта.</li><li>В случае удаления данных с сайта по инициативе одной из сторон, а именно прекращения использования сайта, персональные данные пользователя хранятся в базах данных Оператора пять лет в соответствии с законодательством Российской Федерации.</li><li>По истечении вышеуказанного срока хранения персональных данных пользователя персональные данные пользователя удаляются автоматически заданным алгоритмом, который задает Оператор.</li><li>Оператором не ведется обработка персональных данных Пользователей на бумажных носителях информации.</li></ol></li><li>Удаление и уничтожение персональных данных <!----><ol><li>При достижении целей обработки персональных данных, а также в случае отзыва субъектом персональных данных согласия на их обработку персональные данные подлежат уничтожению, если:
• иное не предусмотрено договором, стороной которого, выгодоприобретателем или поручителем по которому является субъект персональных данных;
• оператор не вправе осуществлять обработку без согласия субъекта персональных данных на основаниях, предусмотренных Законом о персональных данных или иными федеральными законами;
• иное не предусмотрено другим соглашением между Оператором и субъектом персональных данных.</li><li>Субъект персональных данных вправе в письменной форме требовать уничтожения своих персональных данных в случае, если персональные данные являются неполными, устаревшими, недостоверными, незаконно полученными или не являются необходимыми для заявленной цели обработки.</li><li>В случае отсутствия возможности уничтожения персональных данных Оператор осуществляет блокирование таких персональных данных.</li><li>Уничтожение персональных данных осуществляется путем стирания информации с использованием сертифицированного программного обеспечения с гарантированным уничтожением (в соответствии с заданными характеристиками для установленного программного обеспечения с гарантированным уничтожением).</li></ol></li><li>Заключительные положения. <!----><ol><li>Контроль за исполнением требований настоящей Политики осуществляется уполномоченным лицом, ответственным за организацию обработки персональных данных у Оператора.</li><li>Ответственность за нарушение требований законодательства Российской Федерации и нормативных актов в сфере обработки и защиты персональных данных определяется в соответствии с законодательством Российской Федерации.</li><li>В случае изменения действующего законодательства Российской Федерации, внесения изменений в нормативные документы по защите персональных данных настоящая Политика действует в части, не противоречащей действующему законодательству до приведения его в соответствие с такими.</li><li>Условия Политики устанавливаются, изменяются и отменяются Оператором в одностороннем порядке без предварительного уведомления Пользователя. С момента размещения на сайте новой редакции Политики предыдущая редакция считается утратившей свою силу. В случае существенного изменения условий Политики Оператор извещает об этом пользователей путем размещения на сайте соответствующего сообщения.</li><li>В соответствии со статьей 435 Гражданского кодекса Российской Федерации, настоящий документ признается офертой. В соответствии со статьей 438 Гражданского Кодекса Российской Федерации, безусловным принятием (акцептом) условий настоящей политики считается факт подачи пользователем заявки на интернет-сайте  и согласием на обработку своих персональных данных. Согласие на обработку персональных данных, получаемое путем акцепта настоящей оферты, не требует двустороннего подписания и действительно в электронном виде.</li><li>Если Пользователь не согласен с условиями настоящей Политики, то он должен немедленно удалить свой профиль с сайта либо уведомить о своем несогласии Оператора, в противном случае продолжение использования пользователем сайта означает, что пользователь согласен с условиями настоящей Политики.</li></ol></li></ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);
    }

    // Check if we're on rules page
    if (window.location.hash === '#rules') {
        loadRules();
    }

    // Handle hash change for rules page
    // $(window).on('hashchange', function() {
    //     if (window.location.hash === '#rules') {
    //         loadRules();
    //     }
    // });

    // Handle clicks on rules links
    $('a[href="#rules"]').click(function(e) {
        e.preventDefault();
        window.location.hash = '#rules';
        window.location.reload();
    });

    // Handle accordion toggles
    $(document).on('click', '._trigger_6qyfp_16', function() {
        const $trigger = $(this);
        const $content = $trigger.next('._content_6qyfp_23');
        const $circle = $trigger.find('._circle_zep1o_12');
        
        // Toggle expanded state
        const isExpanded = $trigger.attr('aria-expanded') === 'true';
        $trigger.attr('aria-expanded', !isExpanded);
        
        // Toggle content visibility
        $content.toggleClass('show');
        
        // Rotate arrow icon
        $circle.toggleClass('rotated');
    });

    // Add CSS for rotation animation
    $('<style>')
        .text(`
            ._circle_zep1o_12.rotated svg {
                transform: rotate(180deg);
            }
            ._circle_zep1o_12 svg {
                transition: transform 0.3s ease;
            }
            ._content_6qyfp_23 {
                display: none;
            }
            .show {
                display: block !important;
            }
        `)
        .appendTo('head');
});


$(document).ready(function() {
    // Load partners page content
    /*
<div class="_tabs_1ewek_12">
                    <button class="_button_1ewek_27 _VButton_1o5du_8 ${activeTab === 'users' ? '_primary_1o5du_25' : '_secondary_1o5du_39'} _default_1o5du_54" data-tab="users">Пользователям</button>
                    <button class="_button_1ewek_27 _VButton_1o5du_8 ${activeTab === 'monitoring' ? '_primary_1o5du_25' : '_secondary_1o5du_39'} _default_1o5du_54" data-tab="monitoring">Мониторингам</button>
                </div>
    */
    function loadPartners(activeTab = 'users') {
        const baseHTML = `
            <div class="container _PartnersPage_1ewek_8">
                <h1 class="_title_b6l0e_8">Партнёрам</h1>
                
                <div class="_wrapper_b6l0e_19">
                    ${activeTab === 'users' ? getUsersContent() : getMonitoringContent()}
                </div>
            </div>
        `;

        $('main').html(baseHTML);

        // Add event listeners for tab switching
        $('._tabs_1ewek_12 button').click(function() {
            const tab = $(this).data('tab');
            loadPartners(tab);
        });
    }

    function getUsersContent() {
        return `
            <div class="_PartnersUsers_15p3c_8">
                <div class="_card_15p3c_67 _big_15p3c_63">
                    <h2 class="h3 text-semi-bold">Получайте до 0,9% с каждого реферала</h2>
                    <p>Зарегистрируйтесь, скопируйте Реферальную ссылку в личном кабинете и отправьте другу, коллеге, знакомым! Чем больше друзей, больше вознаграждение!</p>
                </div>
                <div class="_row_15p3c_15">
                    <div class="_card_15p3c_67 _small_15p3c_28">
                        <img src="/criptacc_files/online-registration.png" alt="Регистрируетесь на нашем сайте" class="_image_15p3c_75">
                        <p class="_text_15p3c_24">Регистрируетесь на нашем сайте</p>
                    </div>
                    <div class="_icon_15p3c_43">
                        <svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="_arrow_15p3c_53">
                            <path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <div class="_card_15p3c_67 _small_15p3c_28">
                        <img src="/criptacc_files/referral.png" alt="Скопируйте ссылку и отправьте знакомым" class="_image_15p3c_75">
                        <p class="_text_15p3c_24">Скопируйте ссылку и отправьте знакомым или разместите на вашем сайте, канале</p>
                    </div>
                    <div class="_icon_15p3c_43">
                        <svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="_arrow_15p3c_53">
                            <path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <div class="_card_15p3c_67 _small_15p3c_28">
                        <img src="/criptacc_files/coin.png" alt="Получаете вознаграждение" class="_image_15p3c_75">
                        <p class="_text_15p3c_24">Получаете вознаграждение за каждую успешную транзакцию</p>
                    </div>
                    <div class="_icon_15p3c_43">
                        <svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="_arrow_15p3c_53">
                            <path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <div class="_card_15p3c_67 _small_15p3c_28">
                        <img src="/criptacc_files/online-payment.png" alt="Получаете выплату" class="_image_15p3c_75">
                        <p class="_text_15p3c_24">Получаете вознаграждение любым удобным для вас способом</p>
                    </div>
                </div>
                <div class="_card_15p3c_67 _big_15p3c_63">
                    <h2 class="h3 text-semi-bold">Условия реферальных вознаграждений за ваших рефералов:</h2>
                    <ul>
                        <li class="_item_15p3c_79"><span class="blue h4 text-bold">0.5%</span> с 1 до 15 реферала</li>
                        <li class="_item_15p3c_79"><span class="blue h4 text-bold">0.7%</span> с 16 до 50 реферала</li>
                        <li class="_item_15p3c_79"><span class="blue h4 text-bold">0.9%</span> с 51 и до пересмотра системы</li>
                    </ul>
                    <p class="_text_15p3c_24">В случае, если сервис не имеет заработка с проведенной транзакции вашим рефералом, партнёрское вознаграждение не начисляется. Вывести вознаграждение можно на любые направления, присутствующие в личном кабинете пользователя</p>
                </div>
            </div>
        `;
    }

    function getMonitoringContent() {
        return `
            <div class="_PartnersMonitorings_9jln1_8">
                <h3 class="h3 text-semi-bold center _title_9jln1_14">
                    Зарегистрируйтесь как мониторинг и получите реферальную ссылку
                </h3>
                <div class="_cards_9jln1_25">
                    <div class="_card_9jln1_25">
                        <img src="/criptacc_files/discount.png" alt="Единый размер вознаграждения - 0.5%" class="_icon_9jln1_46">
                        <p class="h3 text-semi-bold center">Единый размер вознаграждения - 0.5%</p>
                    </div>
                    <div class="_card_9jln1_25">
                        <img src="/criptacc_files/money.png" alt="Нет ограничений на вывод вознаграждений" class="_icon_9jln1_46">
                        <p class="h3 text-semi-bold center">Нет ограничений на вывод вознаграждений</p>
                    </div>
                    <div class="_card_9jln1_25">
                        <img src="/criptacc_files/speedometer.png" alt="Своевременное исполнение заявок" class="_icon_9jln1_46">
                        <p class="h3 text-semi-bold center">Своевременное исполнение заявок</p>
                    </div>
                </div>
                <div class="_info_9jln1_52">
                    <p class="_txt_9jln1_66">
                        Реферальные начисления рассчитываются от прибыли сервиса. Существуют направления обмена,
                        по которым сервис не получает прибыль. За обмены по таким направлениям реферальные
                        вознаграждения не начисляются.
                    </p>
                    <p class="_txt_9jln1_66">
                        По вопросам реферального вознаграждения обращайтесь в техническую поддержку
                    </p>
                </div>
            </div>
        `;
    }

    // Check if we're on partners page
    if (window.location.hash === '#partners') {
        loadPartners();
    }

    // Handle hash change
    // $(window).on('hashchange', function() {
    //     if (window.location.hash === '#partners') {
    //         loadPartners();
    //     }
    // });

    // Handle clicks on partners links
    $('a[href="#partners"]').click(function(e) {
        e.preventDefault();
        window.location.hash = 'partners';
        window.location.reload();
    });
});


$(document).ready(function() {
   
    // Check if we're on AML/KYC page
    function loadFAQ() {
      $('main').html(`
        <style>
        ._content_6qyfp_23 {
            max-height: 0;
            opacity: 0;
            overflow: hidden;
            transition: all 0.3s ease;
        }
        .show {
            max-height: 1000px;
            opacity: 1;
            display: flex !important;
        }
            ._circle_zep1o_12.rotated svg {
            transform: rotate(180deg);
          }
          ._circle_zep1o_12 svg {
            transition: transform 0.3s ease;
          }
          ._content_6qyfp_23 {
            display: none;
          }
        </style>
        <div class="container"><h1 class="_title_b6l0e_8">Помощь</h1><div class="_wrapper_b6l0e_19"><div class="_VAccordion_6qyfp_8 _question_1omqw_8"><div class="_trigger_6qyfp_16" role="button" aria-expanded="false"><div class="h3 text-semi-bold _title_6qyfp_62">Как совершить обмен на вашем сайте?</div><div class="_DropdownTrigger_zep1o_8"><div class="_circle_zep1o_12"><svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="icon-frame _icon_zep1o_27"><path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path></svg></div></div></div><div class="_content_6qyfp_23"><ul><li>1. На главной странице сайта, Вам необходимо выбрать валюту “ОТДАЮ” и валюту “ПОЛУЧАЮ”, ввести сумму в калькулятор и система посчитает сумму, которую вы получите.</li><li>2. После чего в поле “ВВОД ДАННЫХ” введите необходимые данные для обмена. В этом же столбце Вы можете посмотреть курс обмена. В него уже включена комиссия нашего сервиса. Нажмите кнопку “ПЕРЕЙТИ К ОПЛАТЕ”.</li><li>3. На следующей странице необходимо ознакомиться с информацией вверху страницы, далее скопировать реквизиты сайта, совершить оплату и нажать кнопку “Я ОПЛАТИЛ”.</li></ul></div></div><div class="_VAccordion_6qyfp_8 _question_1omqw_8"><div class="_trigger_6qyfp_16" role="button" aria-expanded="false"><div class="h3 text-semi-bold _title_6qyfp_62">Где мне следить за статусом моей заявки?</div><div class="_DropdownTrigger_zep1o_8"><div class="_circle_zep1o_12"><svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="icon-frame _icon_zep1o_27"><path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path></svg></div></div></div><div class="_content_6qyfp_23"><p>Статус заявки Вы можете отслеживать в Личном кабинете либо на почте, которую Вы указали в заявке.</p></div></div><div class="_VAccordion_6qyfp_8 _question_1omqw_8"><div class="_trigger_6qyfp_16" role="button" aria-expanded="false"><div class="h3 text-semi-bold _title_6qyfp_62">Сколько длится обмен?</div><div class="_DropdownTrigger_zep1o_8"><div class="_circle_zep1o_12"><svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="icon-frame _icon_zep1o_27"><path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path></svg></div></div></div><div class="_content_6qyfp_23"><p>Мы отправляем средства в течении 1-10 минут после получения от Вас оплаты.</p></div></div><div class="_VAccordion_6qyfp_8 _question_1omqw_8"><div class="_trigger_6qyfp_16" role="button" aria-expanded="false"><div class="h3 text-semi-bold _title_6qyfp_62">Я совершил оплату, а страница с кнопкой “Я оплатил” пропала, что делать?</div><div class="_DropdownTrigger_zep1o_8"><div class="_circle_zep1o_12"><svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="icon-frame _icon_zep1o_27"><path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path></svg></div></div></div><div class="_content_6qyfp_23"><p>Если по какой-либо причине Вы не смогли нажать кнопку “Я оплатил”, напишите нам в онлайн-чат на сайте либо на почту help.@gmail.com</p></div></div><div class="_VAccordion_6qyfp_8 _question_1omqw_8"><div class="_trigger_6qyfp_16" role="button" aria-expanded="false"><div class="h3 text-semi-bold _title_6qyfp_62">Я указал неверные реквизиты и средства не пришли, что делать?</div><div class="_DropdownTrigger_zep1o_8"><div class="_circle_zep1o_12"><svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="icon-frame _icon_zep1o_27"><path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path></svg></div></div></div><div class="_content_6qyfp_23"><p>К сожалению, мы не сможем вернуть ваши средства. Все что мы можем сделать, это отправить вам реквизиты, куда средства ушли. Будьте внимательны при вводе данных!</p></div></div><div class="_VAccordion_6qyfp_8 _question_1omqw_8"><div class="_trigger_6qyfp_16" role="button" aria-expanded="false"><div class="h3 text-semi-bold _title_6qyfp_62">Могу ли я отказаться от обмена, если уже оплатил заявку?</div><div class="_DropdownTrigger_zep1o_8"><div class="_circle_zep1o_12"><svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="icon-frame _icon_zep1o_27"><path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path></svg></div></div></div><div class="_content_6qyfp_23"><p>Если Ваша заявка не выполнена и средства не были отправлены, Ваша заявка может быть отменена и средства возвращены Вам с вычетом комиссии внутри платежной системы. В случае, если заявка была выполнена, отмена обмена невозможна.</p></div></div><div class="_VAccordion_6qyfp_8 _question_1omqw_8"><div class="_trigger_6qyfp_16" role="button" aria-expanded="false"><div class="h3 text-semi-bold _title_6qyfp_62">Я купил Биткоин, средства мне не пришли, а заявка имеет статус “Обработана”, что делать?</div><div class="_DropdownTrigger_zep1o_8"><div class="_circle_zep1o_12"><svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="icon-frame _icon_zep1o_27"><path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path></svg></div></div></div><div class="_content_6qyfp_23"><p>Для того, чтобы средства поступили на кошелек, требуется в среднем от 3 до 6 подтверждений сети Биткоин. Скорость подтверждения зависит от загруженности сети Биткоин, чем больше неподтвержденных транзакций, тем дольше будет подтверждаться транзакция. Загруженность сети вы всегда можете отследить здесь.</p></div></div><div class="_VAccordion_6qyfp_8 _question_1omqw_8"><div class="_trigger_6qyfp_16" role="button" aria-expanded="false"><div class="h3 text-semi-bold _title_6qyfp_62">Я перевел Биткоин, но не получил выплату, в чем дело?</div><div class="_DropdownTrigger_zep1o_8"><div class="_circle_zep1o_12"><svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="icon-frame _icon_zep1o_27"><path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path></svg></div></div></div><div class="_content_6qyfp_23"><p>Операции по обмену Биткоина проводятся только после получения 1 подтверждения от сети Bitcoin.
Бывают случаи, когда ваша заявка удаляется, это происходит если:</p><ul><li>1. Оплата по заявке не поступала в течении 1 часа с момента создания.</li><li>2. Была переведена сумма, которая не соответствует указанной вами сумме в заявке. Если заявка была удалена, обратитесь в онлайн-чат на сайте либо на почту help.@gmail.com</li></ul></div></div><div class="_VAccordion_6qyfp_8 _question_1omqw_8"><div class="_trigger_6qyfp_16" role="button" aria-expanded="false"><div class="h3 text-semi-bold _title_6qyfp_62">Куда придет мой EXMO-CODE?</div><div class="_DropdownTrigger_zep1o_8"><div class="_circle_zep1o_12"><svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="icon-frame _icon_zep1o_27"><path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path></svg></div></div></div><div class="_content_6qyfp_23"><p>В случае если Вы создали заявку на нашем сервисе в направлении EXMO, после того как Ваша заявка будет исполнена, Вы сможете получить свой EXMO-CODE на Вашей почте.</p></div></div><div class="_VAccordion_6qyfp_8 _question_1omqw_8"><div class="_trigger_6qyfp_16" role="button" aria-expanded="false"><div class="h3 text-semi-bold _title_6qyfp_62">Могу ли я обменять сумму меньше минимальной?</div><div class="_DropdownTrigger_zep1o_8"><div class="_circle_zep1o_12"><svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="icon-frame _icon_zep1o_27"><path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path></svg></div></div></div><div class="_content_6qyfp_23"><p>Обмен ниже минимальной суммы невозможен.</p></div></div><div class="_VAccordion_6qyfp_8 _question_1omqw_8"><div class="_trigger_6qyfp_16" role="button" aria-expanded="false"><div class="h3 text-semi-bold _title_6qyfp_62">Можно ли обменять сумму больше, чем указана на сайте?</div><div class="_DropdownTrigger_zep1o_8"><div class="_circle_zep1o_12"><svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="icon-frame _icon_zep1o_27"><path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path></svg></div></div></div><div class="_content_6qyfp_23"><p>Да, для этого Вам необходимо связаться в онлайн-чате на сайте с оператором и обсудить с ним все детали обмена. Мы постараемся обеспечить выполнение Вашей заявки.</p></div></div><div class="_VAccordion_6qyfp_8 _question_1omqw_8"><div class="_trigger_6qyfp_16" role="button" aria-expanded="false"><div class="h3 text-semi-bold _title_6qyfp_62">В какое время вы работаете?</div><div class="_DropdownTrigger_zep1o_8"><div class="_circle_zep1o_12"><svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="icon-frame _icon_zep1o_27"><path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path></svg></div></div></div><div class="_content_6qyfp_23"><p>Наш сервис функционирует 24 часа в сутки, 7 дней в неделю без перерывов.</p></div></div><div class="_VAccordion_6qyfp_8 _question_1omqw_8"><div class="_trigger_6qyfp_16" role="button" aria-expanded="false"><div class="h3 text-semi-bold _title_6qyfp_62">Обязательна ли регистрация на вашем сайте?</div><div class="_DropdownTrigger_zep1o_8"><div class="_circle_zep1o_12"><svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="icon-frame _icon_zep1o_27"><path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path></svg></div></div></div><div class="_content_6qyfp_23"><p>Нет, регистрация не обязательна. Но если Вы зарегистрируетесь на нашем сервисе, то сможете участвовать в нашей партнерской программе.</p></div></div><div class="_VAccordion_6qyfp_8 _question_1omqw_8"><div class="_trigger_6qyfp_16" role="button" aria-expanded="false"><div class="h3 text-semi-bold _title_6qyfp_62">Какая у вас комиссия?</div><div class="_DropdownTrigger_zep1o_8"><div class="_circle_zep1o_12"><svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="icon-frame _icon_zep1o_27"><path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path></svg></div></div></div><div class="_content_6qyfp_23"><p>Комиссии нашего сервиса уже включены в курс обмена и отображаются на стадии оформления заявки.</p></div></div><div class="_VAccordion_6qyfp_8 _question_1omqw_8"><div class="_trigger_6qyfp_16" role="button" aria-expanded="false"><div class="h3 text-semi-bold _title_6qyfp_62">Какие бонусы есть для постоянных клиентов?</div><div class="_DropdownTrigger_zep1o_8"><div class="_circle_zep1o_12"><svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="icon-frame _icon_zep1o_27"><path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path></svg></div></div></div><div class="_content_6qyfp_23"><p>Любой зарегистрированный пользователь, совершая любой обмен, уже участвует в формировании своей накопительной скидки. После достижения любого из этапов этой нашей Программы лояльности Вы получаете коэффициент, который применяется к формированию более выгодного курса обмена именно для Вас при каждом следующем обмене. То есть, Вы получаете скидку на любой обмен в любом направлении. С более детальной информацией Вы можете ознакомится после регистрации в своем Личном кабинете.</p></div></div><div class="_VAccordion_6qyfp_8 _question_1omqw_8"><div class="_trigger_6qyfp_16" role="button" aria-expanded="false"><div class="h3 text-semi-bold _title_6qyfp_62">Мне нужна ссылка на транзакцию, где мне ее взять?</div><div class="_DropdownTrigger_zep1o_8"><div class="_circle_zep1o_12"><svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="icon-frame _icon_zep1o_27"><path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path></svg></div></div></div><div class="_content_6qyfp_23"><p>Если Вам нужна ссылка на транзакцию, напишите нам в онлайн-чат на сайте, либо на почту help.@gmail.com Укажите номер Вашей заявки и оператор предоставит вам ссылку.</p></div></div><div class="_VAccordion_6qyfp_8 _question_1omqw_8"><div class="_trigger_6qyfp_16" role="button" aria-expanded="false"><div class="h3 text-semi-bold _title_6qyfp_62">Я обменял средства через телеграм/телеграм-бота, по договоренности на форуме, скайпе, вайбере, но не получил свои средства. Почему?</div><div class="_DropdownTrigger_zep1o_8"><div class="_circle_zep1o_12"><svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="icon-frame _icon_zep1o_27"><path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path></svg></div></div></div><div class="_content_6qyfp_23"><p>Все обмены производятся только через заявку на сайте, в заявке Вы получаете все необходимые реквизиты для совершения обмена. Если Вам предлагают совершить обмен в телеграме — Вы попали на мошенников, которые представляются нами. Пожалуйста, обязательно сообщите нам о таких случаях, чтобы мы могли принять меры! Все наши официальные контакты для связи указаны на странице “Контакты”</p></div></div><div class="_VAccordion_6qyfp_8 _question_1omqw_8"><div class="_trigger_6qyfp_16" role="button" aria-expanded="false"><div class="h3 text-semi-bold _title_6qyfp_62">Зачем нужна верификация?</div><div class="_DropdownTrigger_zep1o_8"><div class="_circle_zep1o_12"><svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="icon-frame _icon_zep1o_27"><path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path></svg></div></div></div><div class="_content_6qyfp_23"><p>Мы должны знать, что карта у Вас на руках и что обмен совершаете именно Вы. Многие мошенники пытаются воспользоваться украденными данными, чтобы перевести средства, не имея на руках пластиковой карты. Поэтому, верификация является простым, но довольно надежным способом защиты наших пользователей.</p></div></div><div class="_VAccordion_6qyfp_8 _question_1omqw_8"><div class="_trigger_6qyfp_16" role="button" aria-expanded="false"><div class="h3 text-semi-bold _title_6qyfp_62">Есть ли у вас партнерская или реферальная программа?</div><div class="_DropdownTrigger_zep1o_8"><div class="_circle_zep1o_12"><svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="icon-frame _icon_zep1o_27"><path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path></svg></div></div></div><div class="_content_6qyfp_23"><p>Да. У нас есть весьма понятная и прозрачная партнерская программа, с её условиями Вы можете ознакомится</p></div></div><div class="_VAccordion_6qyfp_8 _question_1omqw_8"><div class="_trigger_6qyfp_16" role="button" aria-expanded="false"><div class="h3 text-semi-bold _title_6qyfp_62">Что делать, если не приходит письмо на почту?</div><div class="_DropdownTrigger_zep1o_8"><div class="_circle_zep1o_12"><svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="icon-frame _icon_zep1o_27"><path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path></svg></div></div></div><div class="_content_6qyfp_23"><p>Если письмо с подтверждением электронного адреса Вам не пришло, то следует убедиться, что при регистрации Вы указали правильный e-mail. Так же многие почтовые сервисы могут воспринимать наши сообщения как нежелательные и помечать их как “спам” или же не доставлять их до Вас. Внизу указаны возможные варианты для решения проблемы.</p><ul><li>1. Следует убедиться, что при регистрации Вы указали верный адрес. Для этого пройдите процедуру регистрации повторно. Если Вы увидите сообщение “электронный адрес занят” это означает, что электронный адрес занят и он введен верно.</li><li>2. Следует проверить папку «Спам» на Вашей почте;</li><li>3. Следует проверить настройки Вашего спам-фильтра;
В случае если ни один из пунктов Вам не помог, пожалуйста, обратитесь в круглосуточную поддержку на нашем сайте.</li></ul></div></div><div class="_VAccordion_6qyfp_8 _question_1omqw_8"><div class="_trigger_6qyfp_16" role="button" aria-expanded="false"><div class="h3 text-semi-bold _title_6qyfp_62">У меня не работает чат на сайте, как мне вам написать?</div><div class="_DropdownTrigger_zep1o_8"><div class="_circle_zep1o_12"><svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="icon-frame _icon_zep1o_27"><path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path></svg></div></div></div><div class="_content_6qyfp_23"><p>Некоторые расширения для браузера могут блокировать онлайн-чат на сайте, в таком случае Вы можете зайти с другого браузера и попробовать снова. Если это не помогает, напишите нам на почту help.@gmail.com</p></div></div><div class="_VAccordion_6qyfp_8 _question_1omqw_8"><div class="_trigger_6qyfp_16" role="button" aria-expanded="false"><div class="h3 text-semi-bold _title_6qyfp_62">Я забыл пароль от аккаунта, можно ли его восстановить?</div><div class="_DropdownTrigger_zep1o_8"><div class="_circle_zep1o_12"><svg viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-arrow" class="icon-frame _icon_zep1o_27"><path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path></svg></div></div></div><div class="_content_6qyfp_23"><p>Да, конечно. Для этого в окне с Авторизацией нажмите на кнопку “Забыл пароль”, введите адрес своей электронной почты, на которую происходила регистрация аккаунта, и следуйте инструкциям в письме, которое Вам поступит почти мгновенно. Если Вы потеряли доступ к своей почте, обратитесь в техническую поддержку вашего почтового аккаунта. Если по каким-либо причинам письмо Вам не приходит, обратитесь в онлайн-чат на сайте либо напишите на почту help.@gmail.com</p></div></div></div></div>
      `);
    }

    if(window.location.hash === '#faq') {
        loadFAQ();
      }
     
      // Check hash on hash change
    //   $(window).on('hashchange', function() {
    //     if(window.location.hash === '#faq') {
    //       loadFAQ(); 
    //     }
    //   });
     
      // Handle clicks on faq links
      $('a[href="#faq"]').click(function(e) {
        e.preventDefault();
        window.location.hash = 'faq';
        window.location.reload();
      });


      // Handle accordion toggles
      $('._trigger_6qyfp_16').click(function() {
        //FOR SOME UNEXPECTED JS IS SHIT REASON THIS NOT WORK PROPERLY
        console.log($(this).find('._circle_zep1o_12').toggleClass('rotated'))
        $(this).find('._circle_zep1o_12').toggleClass('rotated');
        console.log($(this).find('._content_6qyfp_23').toggleClass('show'));
        $(this).attr('aria-expanded', $(this).attr('aria-expanded') === 'true' ? 'false' : 'true');
      });
});


$(document).ready(function() {
    // Load contacts page content
    function loadContacts() {
        $('main').html(`
            <div class="container">
                <h1 class="_title_b6l0e_8">Контакты</h1>
                <div class="_wrapper_b6l0e_19">
                    <div class="_wrapper_ohjrh_8">
                        <div class="_left_ohjrh_18">
                            <!-- Support Section -->
                            <div class="_card_ohjrh_24">
                                <div class="_ContactsSupport_1ws17_8">
                                    <div class="_column_1ws17_21">
                                        <h2 class="_title_r43dp_8">Техническая поддержка</h2>
                                        <p>Если у вас возникли вопросы технического или финансового плана, напишите нам в онлайн чат или на почту, и мы поможем решить их!</p>
                                    </div>
                                    <div class="_column_1ws17_21">
                                        <button type="button" class="_VButton_1o5du_8 _primary_1o5du_25 _default_1o5du_54">
                                            Написать в онлайн чат
                                            <span class="_icon_1o5du_65">
                                                <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-chat">
                                                    <path d="M12.1665 2C17.6895 2 22.1665 6.477 22.1665 12C22.1665 17.523 17.6895 22 12.1665 22C10.5705 22.0022 8.99733 21.6208 7.57951 20.888L3.75351 21.955C3.54005 22.0146 3.31459 22.0163 3.10024 21.9601C2.88588 21.9038 2.69033 21.7916 2.53362 21.6349C2.37692 21.4782 2.26469 21.2826 2.20844 21.0683C2.15219 20.8539 2.15394 20.6285 2.21351 20.415L3.28151 16.592C2.54686 15.1729 2.16444 13.5979 2.16651 12C2.16651 6.477 6.64351 2 12.1665 2Z" fill="currentColor"/>
                                                </svg>
                                            </span>
                                        </button>
                                        <a href="mailto:help.@gmail.com" class="_VButton_1o5du_8 _secondary_1o5du_39 _default_1o5du_54">
                                            Написать на почту
                                            <span class="_icon_1o5du_65">
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-mail">
                                                    <path d="M4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.19667 19.0217 2.00067 18.5507 2 18V6C2 5.45 2.196 4.97933 2.588 4.588C2.98 4.19667 3.45067 4.00067 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.805 4.98 22.0007 5.45067 22 6V18C22 18.55 21.8043 19.021 21.413 19.413C21.0217 19.805 20.5507 20.0007 20 20H4ZM12 13L20 8V6L12 11L4 6V8L12 13Z" fill="currentColor"/>
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                    <div>
                                        <div class="_item_1ws17_27">Почта</div>
                                        <a href="mailto:help.@gmail.com">help.@gmail.com</a>
                                    </div>
                                    <div>
                                        <div class="_item_1ws17_27">Социальные сети</div>
                                        <a href="https://t.me" target="_blank" rel="noopener noreferrer">
                                            <svg xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0;height:2.4rem;width:2.4rem" viewBox="0 0 40 40" fill="none" class="_icon_1ws17_32">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 0H33.75C37.2018 0 40 2.79822 40 6.25V33.75C40 37.2018 37.2018 40 33.75 40H6.25C2.79822 40 0 37.2018 0 33.75V6.25C0 2.79822 2.79822 0 6.25 0ZM20.8648 15.0092C19.0736 15.7543 15.4936 17.2963 10.1249 19.6354C9.2531 19.9821 8.79642 20.3212 8.75485 20.6528C8.68458 21.2133 9.38643 21.434 10.3422 21.7345C10.4722 21.7754 10.6069 21.8177 10.745 21.8626C11.6853 22.1683 12.9501 22.5259 13.6077 22.5401C14.2042 22.553 14.8699 22.3071 15.6049 21.8024C20.621 18.4163 23.2104 16.7049 23.3729 16.668C23.4876 16.6419 23.6465 16.6092 23.7542 16.7049C23.8619 16.8006 23.8513 16.9819 23.8399 17.0305C23.7704 17.3269 21.0154 19.8882 19.5896 21.2137C19.1452 21.6269 18.8299 21.92 18.7654 21.987C18.6211 22.1369 18.4739 22.2788 18.3325 22.4151C17.459 23.2572 16.8039 23.8887 18.3688 24.92C19.1208 25.4156 19.7226 25.8254 20.323 26.2342C20.9786 26.6807 21.6326 27.1261 22.4787 27.6807C22.6942 27.822 22.9001 27.9688 23.1006 28.1118C23.8637 28.6557 24.5492 29.1444 25.3961 29.0665C25.8882 29.0212 26.3965 28.5585 26.6546 27.1784C27.2647 23.9169 28.464 16.8501 28.7411 13.9381C28.7654 13.6829 28.7348 13.3564 28.7103 13.2131C28.6858 13.0698 28.6345 12.8655 28.4482 12.7144C28.2276 12.5353 27.8869 12.4976 27.7346 12.5001C27.0419 12.5125 25.9792 12.882 20.8648 15.0092Z" fill="currentColor"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <!-- Cooperation Section -->
                            <div class="_card_ohjrh_24">
                                <div class="_ContactsCooperation_1ugr9_8">
                                    <h2 class="_title_r43dp_8">Предложения, сотрудничество:</h2>
                                    <div>
                                        <div class="_item_1ws17_27">Почта</div>
                                        <a href="mailto:offers.@gmail.com">offers.@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Forums Section -->
                        <div class="_card_ohjrh_24 _links_ohjrh_38">
                            <h2 class="_title_r43dp_8">Мы на форумах</h2>
                            <div class="_links_r43dp_14">
                                <a href="https://forum.bits.media/index.php?/topic/173436-criptacc-обмен-сбербанк-тинькофф-qiwi-яндексденьги-btc-eth-и-др/" class="_ContactsLink_1tq0p_8" target="_blank" rel="noopener noreferrer">forum.bits.media</a>
                                <a href="https://searchengines.guru/ru/forum/1037699" class="_ContactsLink_1tq0p_8" target="_blank" rel="noopener noreferrer">SearchEngines.guru</a>
                                <a href="https://bitalk.org/threads/30633/" class="_ContactsLink_1tq0p_8" target="_blank" rel="noopener noreferrer">Bitalk.org</a>
                                <a href="https://mmgp.ru/showthread.php?t=714049#post17197546" class="_ContactsLink_1tq0p_8" target="_blank" rel="noopener noreferrer">Mmgp.ru</a>
                                <a href="https://forumbusiness.net/showthread.php?p=269420" class="_ContactsLink_1tq0p_8" target="_blank" rel="noopener noreferrer">ForumBusiness.net</a>
                                <a href="https://forum.cryptoff.org/index.php?/topic/19063-criptacc-obmen-sberbank-tinkoff-qiwi-iandeksdengi-btc-eth-i-d/" class="_ContactsLink_1tq0p_8" target="_blank" rel="noopener noreferrer">forum.cryptoff.org</a>
                                <a href="https://www.maultalk.com/topic319371.html" class="_ContactsLink_1tq0p_8" target="_blank" rel="noopener noreferrer">Maultalk.com</a>
                                <a href="https://cryptotalk.org/topic/345901-criptacc-обмен-сбербанк-тинькофф-qiwi-btc-eth-и-др/" class="_ContactsLink_1tq0p_8" target="_blank" rel="noopener noreferrer">Cryptotalk.org</a>
                            </div>
                        </div>

                        <!-- Monitoring Section -->
                        <div class="_card_ohjrh_24 _links_ohjrh_38">
                            <h2 class="_title_r43dp_8">Мы на мониторингах</h2>
                            <div class="_links_r43dp_14">
                                <a href="https://www.bestchange.ru/cripta-exchanger.html" class="_ContactsLink_1tq0p_8" target="_blank" rel="noopener noreferrer">Bestchange</a>
                                <a href="https://kurs.expert/ru/obmennik/cripta-cc/feedbacks.html#reputation" class="_ContactsLink_1tq0p_8" target="_blank" rel="noopener noreferrer">Курс Эксперт</a>
                                <a href="https://www.okchanger.ru/exchangers/Крипта" class="_ContactsLink_1tq0p_8" target="_blank" rel="noopener noreferrer">Okchanger.ru</a>
                                <a href="https://exchangesumo.com/exchanger/948/Cripta/" class="_ContactsLink_1tq0p_8" target="_blank" rel="noopener noreferrer">Exchangesumo.com</a>
                                <a href="https://eobmen-obmen.ru/cripta-detali" class="_ContactsLink_1tq0p_8" target="_blank" rel="noopener noreferrer">Eobmen-obmen.ru</a>
                                <a href="https://bitcoinmarket.global/exchanger.php?id=445" class="_ContactsLink_1tq0p_8" target="_blank" rel="noopener noreferrer">Bitcoinmarket.global</a>
                                <a href="https://glazok.org/exchange/?details=934" class="_ContactsLink_1tq0p_8" target="_blank" rel="noopener noreferrer">Glazok.org</a>
                                <a href="https://bits.media/exchanger/cripta-cc" class="_ContactsLink_1tq0p_8" target="_blank" rel="noopener noreferrer">bits.media</a>
                                <a href="https://pro-obmen.ru/cripta" class="_ContactsLink_1tq0p_8" target="_blank" rel="noopener noreferrer">pro-obmen.ru</a>
                                <a href="https://e-mon.ru/" class="_ContactsLink_1tq0p_8" target="_blank" rel="noopener noreferrer">e-mon.ru</a>
                                <a href="https://crypto.ru/obmenniki" class="_ContactsLink_1tq0p_8" target="_blank" rel="noopener noreferrer">crypto.ru</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);

        // Handle chat button click
        $('._primary_1o5du_25').click(function() {
            // Trigger chat widget open
            // Add your chat widget opening logic here
        });
    }

    if(window.location.hash === '#contacts') {
        loadContacts();
    }
     
      // Check hash on hash change
    //   $(window).on('hashchange', function() {
    //     if(window.location.hash === '#contacts') {
    //       loadContacts(); 
    //     }
    //   });
     
      // Handle clicks on faq links
      $('a[href="#contacts"]').click(function(e) {
        e.preventDefault();
        window.location.hash = 'contacts';
        window.location.reload();
      });
});

// Store current language
let currentLang = 'ru';

// Complete translations dictionary
const translations = {
  en: {
    // Additional translations
    "Загруженность сети BTC": "BTC Network Load",
    "Как получить промокод?": "How to get promo code?",
    "Евгений": "Eugene",
    "Олег": "Oleg",
    "Александр": "Alexander",
    "Вс быстро и удобно, рекомендую.": "Everything is fast and convenient, I recommend.",
    "Уже не первый год пользуюсь. Всё нравится.": "Been using it for years. Everything is great.",
    "Все отлично, как всегда.": "Everything is excellent, as always.",
    "Норм обменник!)": "Good exchange!)",
    
    // Admin section
    "Администрация сервиса, понимая общественную опасность преступлений, связанных с отмыванием денежных средств и финансированием террористической деятельности, одобрила комплекс организационно-правовых мер, с целью соблюдения положений национального законодательства, а также требований межправительственной организации FATF.": 
    "The administration of service, understanding the public danger of crimes related to money laundering and terrorist financing, has approved a set of organizational and legal measures to comply with national legislation and FATF requirements.",
    // Navigation & Header
    "Правила": "Rules",
    "Партнерам": "Partners",
    "AML/KYC": "AML/KYC",
    "FAQ": "FAQ",
    "Контакты": "Contacts",
    
    // Calculator Section
    "Калькулятор": "Calculator",
    "Отдаёте": "You Send",
    "Получаете": "You Receive",
    "Курс": "Rate",
    "Загруженность сети": "Network Load",
    "Скидка": "Discount",
    "Промокод, необязательно": "Promo Code (optional)",
    "Как получить промокод?": "How to get promo code?",
    "Далее": "Continue",
    "Выберите валюту": "Select Currency",
    "Поиск": "Search",

    // Hero Section
    "Работаем 24/7": "Working 24/7",
    "Надёжный сервис,": "Reliable service,",
    "проверенный годами!": "proven by years!",
    "Присоединяйтесь к тысячам пользователей, уже опробовавшим наш сайт": "Join thousands of users who have already tried our service",

    // Advantages Section
    "Почему выбирают нас?": "Why Choose Us?",
    "Быстро": "Fast",
    "Надёжно": "Reliable",
    "Поддержка 24/7": "24/7 Support",
    "Выгодный курс": "Best Rates",
    "Время – деньги, и мы это понимаем. Наши операции проводятся моментально, обеспечивая вам мгновенный доступ к желаемым средствам.": 
    "Time is money, and we understand that. Our operations are instant, providing you immediate access to desired funds.",
    "Мы сотрудничаем только с самыми надежными фиатными провайдерами, чтобы обеспечить лучший сервис на рынке": 
    "We partner only with the most reliable fiat providers to ensure the best service in the market",
    "Наши опытные специалисты службы поддержки всегда готовы помочь вам с любыми возникающими вопросами": 
    "Our experienced support specialists are always ready to help you with any questions",
    "Мы гарантируем прозрачность и честность в каждой сделке": 
    "We guarantee transparency and honesty in every transaction",

    // Reviews Section
    "Более": "Over",
    "отзывов": "reviews",
    "Смотреть все отзывы": "View all reviews",
    
    // Footer
    "Партнер сервисов": "Service Partner",
    "Copyright© 2024": "Copyright© 2024",
    "Сайт не предоставляет возможности зачисления иностранной валюты на счета валютных резидентов РФ": 
    "The site does not provide the possibility of crediting foreign currency to the accounts of currency residents of the Russian Federation",
    "Сайт предназначен только для лиц старше 18 лет": "This site is intended only for persons over 18 years of age",

    // AML/KYC Page
    "Политика AML/KYC": "AML/KYC Policy",
    "KYC-проверка: что это и где используется?": "KYC verification: what is it and where is it used?",
    "Что такое AML и для чего он нужен?": "What is AML and what is it for?",
    "Что показывает проверка адреса?": "What does address verification show?",
    "Почему сервисы настаивают на AML-процедурах?": "Why do services insist on AML procedures?",
    "Как понимать оценку риска?": "How to understand risk assessment?",
    "Что делать если мои средства были заблокированы?": "What to do if my funds were blocked?",

    // Dynamic content translations
    "rub": "RUB",
    "usd": "USD",
    "btc": "BTC",
    "eth": "ETH",

    // AML/KYC detailed content
    "Что такое KYC-процедура и почему ей уделяют так много внимания? Рассказываем, как она сможет уберечь вас от мошенников, сохранив анонимность. KYC- и AML-проверки: для чего нужна верификация личности в криптовалютной сфере. KYC (Know Your Customer) – процедура верификации личности клиента и оценки потенциальных рисков от него. Но зачем она нужна и почему сегодня практически невозможно купить криптовалюту, не подтвердив свою личность? Не противоречит ли это изначальным принципам анонимности и децентрализации криптоиндустрии? Сегодня мы разберем, для чего нужны AML- и KYC-проверки и как они работают. Также расскажем, как верификация поможет уменьшить количество мошенников, сохраняя при этом базовую анонимность пользователей.": 
    "What is the KYC procedure and why does it receive so much attention? We explain how it can protect you from fraudsters while maintaining anonymity. KYC and AML checks: why identity verification is needed in the cryptocurrency sphere. KYC (Know Your Customer) is a procedure for verifying a client's identity and assessing potential risks.",

    "Anti-Money Laundering – комплекс мер по противодействию отмыванию средств, финансированию терроризма и созданию оружия массового уничтожения. Эта процедура включает в себя идентификацию, хранение и взаимный обмен информацией о клиентах, их прибыли и транзакциях между финансовыми организациями и государственными ведомствами. Большинство классических финансовых институтов используют AML-меры для проверки бизнеса, работающего с наличными или использующего нал как один из основных активов. Также они проверяют те предприятия, которые имеют деньги на разных счетах, регулярно переводят их в другие страны и банки, покупают фьючерсы и другие инструменты для наличного расчета. Другими словами, под верификацию попадают все бизнесы, которые потенциально могут обходить финансовый мониторинг и отмывать средства.": 
    "Anti-Money Laundering – a set of measures to counter money laundering, terrorism financing, and weapons of mass destruction development.",

    "Общий риск (в процентах) – вероятность того, что адрес связан с нелегальной деятельностью. Источники риска – известные типы сервисов, с которыми адрес взаимодействовал, и процент средств принятых с / отданных на эти сервисы, по которым рассчитывается общий риск.": 
    "Overall risk (in percentage) – the probability that an address is associated with illegal activity. Risk sources – known types of services with which the address has interacted.",

    "Для подтверждения происхождения средств мы просим пользователей в полном объеме ответить на следующие вопросы:": 
    "To confirm the origin of funds, we ask users to fully answer the following questions:",

    "Если сервис не будет проводить подобные проверки, то мошенники могут использовать его как платформу для отмывания средств и финансирования терроризма. И тогда к ответственности привлекут сам сервис. Именно поэтому биржи и другие крупные криптовалютные компании имплементируют AML-требования в свой бизнес и проводят регулярные KYC-верификации.":
    "If the service does not conduct such checks, then fraudsters can use it as a platform for money laundering and terrorist financing. And then the service itself will be held liable. This is why exchanges and other large cryptocurrency companies implement AML requirements in their business and conduct regular KYC verifications.",
    "- 0−25% − это чистый кошелек/транзакция; \n- 25−75% − это средний уровень риска;  \n- 75%+ − такой кошелек/транзакция считаются рискованной  \n\nРиск больше 50%, но я уверен, что адрес надежный. Как быть? Результаты проверки основаны на международных базах, которые постоянно обновляются. Поэтому адрес, который имел 0% риска вчера, сегодня мог получить или отдать актив рисковому контрагенту. В этом случае оценка риска изменится.":
    "- 0-25% is a clean wallet/transaction; \n- 25-75% is a medium risk; \n- 75%+ - such wallet/transaction is considered risky \n\n the risk is more than 50%, but I am sure that the address is reliable. What to do? The verification results are based on international databases that are constantly updated. Therefore, an address that had 0% risk yesterday could receive or give an asset to a risky counterparty today. In this case, the risk assessment will change.",
    "- посредством какой платформы средства поступили к вам? По возможности, пожалуйста, предоставьте скриншоты из истории выводов кошелька/платформы отправителя, а также ссылку на транзакцию в обозревателе;": 
    "- through which platform did you receive the funds?",

    "- за какую услугу вы получили средства;": 
    "- for what service did you receive the funds;",

    "на какую сумму была транзакция, а также дата и время ее проведения": 
    "what was the transaction amount, and its date and time",
    "- на какую сумму была транзакция, а также дата и время ее проведения; - через какое контактное лицо вы общались с отправителем средств? По возможности, пожалуйста, предоставьте скриншоты переписки с отправителем, где мы можем увидеть подтверждение отправки средств.":
    "- what was the amount of the transaction, as well as the date and time of the transaction; - through which contact person did you communicate with the sender of the funds? If possible, please provide screenshots of correspondence with the sender, where we can see confirmation of sending funds.",
    "- через какое контактное лицо вы общались с отправителем средств? По возможности, пожалуйста, предоставьте скриншоты переписки с отправителем, где мы можем увидеть подтверждение отправки средств.":
    "- through which contact person did you communicate with the sender of the funds? If possible, please provide screenshots of correspondence with the sender, where we can see confirmation of sending funds.",

    "- скриншоты вывода с платформы, откуда контрагент переводил вам средства, на котором будут видны детали транзакции.":
    "- screenshots of the withdrawal from the platform from where the counterparty transferred funds to you, which will show the details of the transaction.",

    "В случае, если ваша транзакция была заблокирована, обмен средств не представляется возможным, заявка будет заблокирована. Средства могут быть возвращены ТОЛЬКО на адрес отправителя. При возврате средств может взыматься комиссия до 10% от суммы обмена или на сумму комиссии сети, в которой производился обмен.":
    "In case your transaction has been blocked, exchange of funds is not possible, the application will be blocked. Funds can be returned ONLY to the sender's address. A commission of up to 10% of the exchange amount or the amount of the commission of the network where the exchange was made may be charged.",

    "через какое контактное лицо вы общались с отправителем средств?": 
    "through which contact person did you communicate with the sender of funds?",

    // Reviews additional content
    "\"Вс быстро и удобно, рекомендую.\"": 
    "Everything is fast and precise. Operators respond quickly.",

    "\"Уже не первый год пользуюсь. Всё нравится.\"": 
    "Everything went great! Good exchange, I recommend.",

    "\"Все отлично, как всегда.\"": 
    "Fast and reliable exchange. Very satisfied.",

    "\"Норм обменник!)\"": 
    "Once again everything is excellent! Thank you.",

    "Почта":"Mail",
    "Социальные сети":"Socials",
    "Техническая поддержка":"Tech support",
    "Если у вас возникли вопросы технического или финансового плана, напишите нам в онлайн чат или на почту, и мы поможем решить их!":"If you have any technical or financial questions, write to us in the online chat or by email, and we will help you solve them!",
    "Предложения, сотрудничество:":"",

    //Rules
    "Правила обмена": "Exchange rules",
    "1. Правила и условия предоставления услуг": "1. Terms and Conditions of Service",
    "Общие положения": "General terms",
    "Настоящее соглашение (далее по тексту Соглашение) регулирует отношение между  и Пользователями сайта . Использование, а также любые действия на страницах сервиса  связанные с обменом валют означают, что пользователь согласен с условиями Соглашения. Если вы не согласны с изложенными ниже правилами, использование сервиса не допускается.": 
    "This agreement (hereinafter referred to as the Agreement) governs the relationship between  and the Users of the  website. The use of, as well as any actions on the pages of the  service related to currency exchange, means that the user agrees to the terms of the Agreement. If you do not agree with the rules set out below, the use of the service is not allowed.",
    "Настоящим вы соглашаетесь и подтверждаете, что вы: достигли установленного законом возраста, необходимого для принятия данного Соглашения; вам не приостанавливали и не запрещали использование Сервисов ранее.":"You hereby agree and acknowledge that you: are of legal age to accept this Agreement; you have not been previously suspended or banned from using the Services.",
    "Термины и определения используемые в соглашении":"Terms and definitions used in the agreement ",
    "(\"Сервис\") - это сервис, предоставляющий услуги обмена цифровой и электронной валюты, расположенный по адресу в сети Интернет.":" (the “Service”) is a digital and electronic currency exchange service located on the Internet.",
    "Пользователь - это любое физическое лицо, которое желает воспользоваться услугами сервиса  и приняло все условия Соглашения.":"User is any natural person who wishes to use the  service and has accepted all the terms and conditions of the Agreement.",
    "Цифровая валюта - любая валюта с использованием технологии блокчейн, а также других криптографических или шифровальных средств.":"Digital currency - any currency using blockchain technology and other cryptographic or encryption means.",
    "Электронная валюта - денежные средства, находящиеся на счетах Пользователей сторонних платежных систем.":"E-currency - funds held in the accounts of Users of third-party payment systems.",
    "Средства - цифровая и/или электронная валюта.":"Funds are digital and/or electronic currency.",
    "Платежная система - продукт, созданный третьей стороной, обладающий системой правил, процедур, а также технической инфраструктуры, обеспечивающий перевод стоимости от одного субъекта экономики другому.":"A payment system is a product created by a third party with a system of rules, procedures, and technical infrastructure that ensures the transfer of value from one economic entity to another.",
    "Платеж - перевод электронной и/или цифровой валюты от плательщика к получателю.":"Payment - transfer of electronic and/or digital currency from the payer to the recipient.",
    "Заявка - выражение намерения Пользователя воспользоваться услугами Сервиса , путем заполнения электронной формы через Интернет-сайт сервиса, на условиях, описанных в данном Соглашении и указанных в параметрах данной заявки.":"Application - expression of the User's intention to use the services of the  Service, by filling in an electronic form through the Service's website, on the terms and conditions described in this Agreement and specified in the parameters of this application.",
    "Пользователь и  - совместно именуются \"Стороны\".":"User and  are collectively referred to as the “Parties”.",
    "Обмен валюты - обмен цифровой или электронной валюты одной платежной системы, на цифровую или электронную валюты другой платежной системы.":"Currency exchange - exchange of digital or electronic currency of one payment system, for digital or electronic currency of another payment system.",
    "Курс - стоимостное соотношение двух обмениваемых активов.":"The exchange rate is the value ratio of two exchanged assets.",
    "Резервы валют - суммы имеющихся в наличии у Сервиса цифровых финансовых активов и денежных средств для совершения услуг. Суммы резервов указаны на Интернет-сайте Сервиса на главной странице.":"Currency reserves are the amounts of digital financial assets and cash available to the Service for the performance of services. The amounts of reserves are indicated on the Service's website on the main page.",
    "Реквизит(-ы) - это совокупность значений, необходимых для проведения безналичного платежа, зачисления или списания электронной и/или цифровой валюты.":"A requisite(s) is a set of values required to make a cashless payment, credit or debit electronic and/or digital currency.",
    "Результирующая валюта – электронная валюта, которую Пользователь получает в результате продажи или обмена Исходной валюты.":"Resulting Currency - the electronic currency that the User receives as a result of the sale or exchange of the Source Currency.",
    "Резерв валюты - имеющийся в распоряжении Сервиса , на момент создания Заявки, объем определенной Электронной валюты.":"Currency Reserve - the amount of a certain Electronic Currency available to the  Service at the moment of creating the Order.",
    "Интернет-сайт Сервиса":"The website of the Service",
    "Вступление Соглашения в силу":"Entry into force of the Agreement",
    "В момент начала формирования заявки Пользователь автоматически принимает настоящее Соглашение, заключенное на условиях публичной оферты.":"The User automatically accepts this Agreement, concluded on the terms of the public offer, at the moment of the beginning of the application formation.",
    "Публичной офертой признается любая отображаемая Сервисом информация на Интернет-сайте сервиса, в том числе отображаемая в процессе оформления Заявки.":"Any information displayed by the Service on the Internet site of the Service, including information displayed during the process of the Application registration, is recognized as a public offer.",
    "Сервис автоматически фиксирует дату и время, курс, и направление обмена после завершения создания заявки.":"The service automatically fixes the date and time, the rate, and the direction of exchange after the completion of the request creation.",
    "Соглашение публикуется Сервисом на его Интернет-сайте, изменения могут вноситься без уведомления Пользователя.":"The Agreement is published by the Service on its Internet site, and changes may be made without notice to the User.",
    "После получения средств Пользователем по Заявке в полном объеме, Соглашение прекращает свое действие.":"Upon receipt of funds by the User under the Application in full, the Agreement shall terminate.",
    "Предмет соглашения":"Subject matter of the agreement",
    "Данное Соглашение отражает услуги обмена цифровой и/или электронной валюты, осуществляемые с помощью формы Заявки, а также любые другие услуги, доступные на Интернет-сайте Сервиса.":"This Agreement reflects the digital and/or electronic currency exchange services performed through the Application Form, as well as any other services available on the Service's Internet site.",
    "Сервис в праве регулировать курсы обмена, о чем уведомляет Пользователей Сервиса размещением актуальной информации на Интернет-сайте Сервиса.":"The Service has the right to regulate the exchange rates, about what it notifies the Service Users by placing the actual information on the Internet site of the Service.",
    "В Заявке, создаваемой Пользователем на Интернет-сайте Сервиса, указывается направление обмена, дата и время, а также общая сумма цифровой и/или электронной валюты перечисляемая Пользователю.":"The Application created by the User on the Internet site of the Service specifies the direction of exchange, date and time, as well as the total amount of digital and/or electronic currency to be transferred to the User.",
    "Порядок оказания услуг Сервисом":"Procedure for provision of services by the Service",
    "Сервис  предоставляет услуги с помощью формы Заявки, расположенной на Интернет-сайте Сервиса.":"The  Service provides services by means of the Application form located on the Internet site of the Service.",
    "Сервис взимает комиссию за услуги обмена. Вознаграждение Сервиса вычитается из суммы Результирующей валюты и отражена в Заявке.":"The Service charges a commission for exchange services. The Service fee is deducted from the amount of the Resulting currency and reflected in the Application.",
    "Курс обмена Сервис  устанавливает сам и публикует на Интернет-сайте Сервиса.":"The  Service sets the exchange rate itself and publishes it on its website.",
    "Сервис вправе устанавливать финансовые и количественные лимиты на Операции. Информация о лимитах указывается на Интернет-сайте Сервиса в разделе Резервы.":"The Service has the right to establish financial and quantitative limits on Transactions. Information about limits is specified on the Internet site of the Service in the Reserves section.",
    "Сервис  не проверяет правомочность и законность владения Пользователем электронной и/или цифровой валюты, участвующими в конкретной Заявке.":"The  Service does not verify the eligibility and legality of the User's ownership of the electronic and/or digital currency involved in a particular Application.",
    "Пользователь подтверждает, что средства и криптовалютный адрес с которого были отправлены средства, принадлежат ему и являются его на законных основаниях.":"The user confirms that the funds and the cryptocurrency address from which the funds were sent belong to him and are his legally.",
    "После выполнения заявки Сервисом , и поступления средств на счёт Пользователя, Пользователь не может отменить заявку и потребовать возврата средств.":"After the  Service has fulfilled the request and the funds have been credited to the User's account, the User cannot cancel the request and request a refund.",
    "Если пользователь допустил ошибку в заполнении реквизитов и средства были отправлены на ошибочный реквизит, заявка считается выполненной и Сервис не несет за это ответственности.":"If the user made a mistake in filling in the details and the funds were sent to the wrong details, the request is considered executed and the Service is not responsible for it.",
    "В случае неоплаты Пользователем заявки в течение 30 минут с момента ее создания, Сервис расторгает договор в одностороннем порядке.":"In case of non-payment by the User of the request within 30 minutes from the moment of its creation, the Service terminates the contract unilaterally.",
    "В случае расторжения соглашения, поступившие позже установленного выше срока средства будут возвращены Пользователю с учетом комиссии за перевод, если оная имеется. В случае задержки не по вине Сервиса, время возврата может быть увеличено до выяснения обстоятельств задержки.":"In case of termination of the agreement, the funds received later than the term established above will be returned to the User, taking into account the transfer fee, if any. In case of delay through no fault of the Service, the refund time may be extended until the circumstances of the delay are clarified.",
    "Если на счет Сервиса поступает сумма, отличающаяся от указанной в заявке, Сервис делает перерасчет, который соответствует фактическому поступлению средств. Если данная сумма превышает указанную в заявке более чем на 10%, Сервис расторгает договор в одностороннем порядке и все средства возвращаются на реквизиты Пользователя, с учетом вычтенной суммы на комиссионные расходы во время перевода.":"If the Service account receives an amount that differs from the amount specified in the application, the Service makes a recalculation that corresponds to the actual receipt of funds. If this amount exceeds the amount specified in the application by more than 10%, the Service terminates the contract unilaterally and all funds are returned to the User's details, taking into account the deducted amount for commission expenses during the transfer.",
    "Если в течение 12 часов Пользователь не получил Средства, полагающиеся ему по Заявке, он может потребовать ее аннулирование и возврат средств.":"If the User has not received the Funds due under the Application within 12 hours, the User may request the cancellation of the Application and a refund.",
    "Если средства были отправлены Пользователю, Заявка не может быть аннулирована.":"If funds have been sent to the User, the Application cannot be canceled.",
    "В случае аннулирования заявки, возврат средств будет исполнен в течение 12 часов с момента аннулирования заявки. В случае аннулирования заявки не по вине сервиса, Пользователь обязуется оплатить все комиссионные расходы.":"In case of canceling the request, the refund will be executed within 12 hours from the moment of canceling the request. In case of cancellation of the request through no fault of the service, the User is obliged to pay all commission costs.",
    "Сервис имеет право отменить Заявку и вернуть Пользователю средства с возмещением комиссии без объяснения причин.":"The Service has the right to cancel the Application and return the funds to the User with reimbursement of the commission without explanation.",
    "Любое нарушение правил Пользователем, дает право Сервису разорвать Соглашение в одностороннем порядке и отказать в обслуживании, средства в данном случае возвращены не будут.":"Any violation of the rules by the User gives the Service the right to terminate the Agreement unilaterally and refuse service, the funds in this case will not be returned.",
    "После отказа Сервиса в обслуживании, Пользователь более не имеет права пользоваться услугами Сервиса . Все последующие заявки будут заморожены.":"After the denial of the Service, the User is no longer authorized to use the services of the  Service. All subsequent requests will be frozen.",
    "Сервис имеет право затребовать у Пользователя любые документы, подтверждающие факт оплаты Пользователем Заявки, а также в случае блокировки средств Пользователя в связи с AML/KYC политикой Сервиса. В случае, если Пользователь отказывается подтвердить факт оплаты или верифицировать себя в случае блокировки средств в связи с AML/KYC политикой Сервиса, Сервис имеет право расторгнуть договор в одностороннем порядке без возврата средств.":"The Service has the right to request from the User any documents confirming the fact of payment of the Application by the User, as well as in case of blocking the User's funds in connection with AML/KYC policy of the Service. In case the User refuses to confirm the fact of payment or verify himself in case of blocking of funds in connection with AML/KYC policy of the Service, the Service has the right to terminate the contract unilaterally without refund.",
    "Все средства, поступившие в адрес Сервиса и невостребованные в течение 14 дней будут утеряны. Поиск и возврат подобных переводов невозможен.":"All funds received by the Service and unclaimed within 14 days will be lost. It is impossible to search for and return such transfers.",
    "В случае, если Пользователь указал неверные реквизиты, у него есть 30 дней с создания заявки для изменения реквизитов, для этого он должен связаться с Сервисом любым доступным ему способом.":"In case the User has specified incorrect details, he has 30 days from the creation of the application to change the details, for this purpose he must contact the Service by any means available to him.",
    "При поступлении от Пользователя суммы, размер которой отличается от указанной в заявке, сервис  может пересчитать заявку и обработать ее без уведомления.":"In case of receipt from the User of an amount that differs from the amount specified in the application,  service may recalculate the application and process it without notification.",
    "Любые налоги, связанные с цифровыми и/или электронными валютами, полученными от Сервиса, Пользователь обязуется оплачивать сам.":"Any taxes related to digital and/or electronic currencies received from the Service, the User undertakes to pay himself.",
    "При отправке Пользователем цифровой валюты Bitcoin, Сервис выполнит заявку только после одного подтверждения транзакции.":"When the User sends Bitcoin digital currency, the Service will fulfill the request after only one transaction confirmation.",
    "Сервис в праве потребовать у Пользователя создать заявку заново, в случае, если цифровая и/или электронная валюта, отправленная Пользователем, поступила на счет Сервиса только после 30 минут с создания заявки.":"The Service has the right to require the User to create the application again, in case the digital and/or electronic currency sent by the User was received on the account of the Service only after 30 minutes from the creation of the application.",
    "Сервис нельзя использовать для проведения незаконных операций. Пользователь дает согласие на привлечение к ответственности за попытку обмена сомнительных средств, в соответствии с нормами государства, в пределах которого совершено нарушение.":"Service can not be used for carrying out illegal operations. The user agrees to be held liable for attempted exchange of dubious funds, in accordance with the norms of the state within which the violation was committed.",
    "Если будет доказана незаконность платежа, то Сервис вправе предоставить информацию об этом по требованию правоохранительных органов, системы платежей либо потерпевшей стороны.":"If illegality of payment will be proved, the Service has the right to provide information about it at the request of law enforcement authorities, payment system or the injured party.",
    "В случае, если транзакция будет идентифицирована как высокорискованная, обменный пункт может приостановить обменную операцию до проведения проверки в соответствии со стандартами FATF, в целях противодействия легализации доходов, полученных преступным путем, и финансированию терроризма.":"In the event that a transaction is identified as high risk, the exchange bureau may suspend the exchange transaction pending verification in accordance with FATF standards, in order to combat money laundering and terrorist financing.",
    "Сервис  не работает/не отправляет/не принимает средства от \"теневых площадок\". Под термином \"теневая площадка\" имеется ввиду любой сайт, который нарушает/может нарушать законы РФ. В случае обнаружения факта отправки/приема средств на \"теневую площадку\", средства будут заморожены, клиент заблокирован, все данные могут быть переданы в правоохранительные органы.":" service does not work/send/receive funds from “shadow sites”. The term “shadow site” means any site that violates/could violate the laws of the Russian Federation. In case of detection of the fact of sending/receiving funds to a “shadow site”, the funds will be frozen, the client will be blocked, all data may be transferred to law enforcement agencies.",
    "Ответственность сторон":"Liability of the parties",
    "Сервис функционирует круглосуточно, но не гарантирует работу на время аппаратных проблем, стихийных бедствий и любых других сбоев или форс-мажорных ситуаций, и не несет ответственности за любые издержки Пользователя, возникшие в результате отсутствия доступа к Интернет-сайту Сервиса.":"The Service operates around the clock, but does not guarantee operation for the duration of hardware problems, natural disasters and any other failures or force majeure situations, and is not responsible for any costs of the User resulting from the lack of access to the Internet site of the Service.",
    "Сервис не предоставляет никаких дополнительных гарантий, все условия и позиции описаны на Интернет-сайте Сервиса.":"The Service does not provide any additional warranties, all terms and conditions and positions are described on the Service's Internet site.",
    "Сервис несет ответственность за вверенные ему средства Пользователем.":"The Service is responsible for the funds entrusted to it by the User.",
    "Сервис не несет никакой ответственности в случае ошибок, сбоев или любых других проблем возникающих на стороне платежных систем, и упущенную в результате этого Пользователем прибыль.":"The Service does not bear any responsibility in case of errors, failures or any other problems arising on the side of payment systems, and the profit lost as a result of it by the User.",
    "В случае, если сервис понес убытки из-за действий Пользователя, или прямо и косвенно связанные с ним, Пользователь гарантирует возмещение данных убытков.":"In the event that the service has suffered losses due to the actions of the User, or directly and indirectly related to it, the User guarantees compensation for these losses.",
    "Пользователь обязуется никак не вмешиваться в программный код или аппаратную часть, или любые другие службы, связанные с функционированием Сервиса. В ином случае, Пользователь осознает, что Сервис оповестит о нарушениях правоохранительные органы.":"The User undertakes not to interfere in any way with the program code or hardware, or any other services related to the functioning of the Service. Otherwise, the User realizes that the Service will notify law enforcement authorities about violations.",
    "В случае, если Сервис подозревает Пользователя в негативном влиянии на работу Сервиса, все заявки Пользователя будут заморожены.":"In case the Service suspects the User of negatively affecting the operation of the Service, all of the User's applications will be frozen.",
    "В случае, если задержки или неисполнения оплаты заявки в следствии непреодолимой силы, Стороны не будут ответственны друг перед другом.":"In case of delay or failure to pay the application due to force majeure, the Parties shall not be liable to each other.",
    "Сайт не предоставляет возможности зачисления иностранной валюты на счета валютных резидентов РФ.":"The site does not provide the possibility of crediting foreign currency to the accounts of currency residents of the Russian Federation.",
    "Порядок решения споров и разногласий":"Procedure for resolving disputes and disagreements",
    "Все споры и разногласия, возникшие или могущие возникнуть из настоящего Соглашения, подлежат разбору либо на сайте Сервиса c помощью чата с Оператором, либо на почте, указанной на странице Контакты на сайте Сервиса. Сервис  после получения от Пользователя претензии обязан в течение 24 часов удовлетворить заявленные в претензии требования либо направить Пользователю мотивированный отказ.":"All disputes and disagreements that have arisen or may arise out of this Agreement shall be resolved either on the website of the Service by means of chat with the Operator, or at the post office indicated on the Contact page of the Service website.  Service after receiving a claim from the User is obliged within 24 hours to satisfy the claims stated in the claim or to send a reasoned refusal to the User.",
    "Заключительные положения":"Final provisions",
    "Сервис  имеет право отправлять Пользователю на указанный в заявке e-mail сведения о статусе обмена, т.к. это является неотъемлемой частью процесса успешного завершения обмена.":"The  Service has the right to send the User to the e-mail address indicated in the request information about the exchange status, because it is an integral part of the process of successful completion of the exchange.",
    "Вся информация, графические изображения, текст, программный код и т.п. является собственностью сайта  и охраняется законом.\n\nСоглашение опубликовано «23» сентября 2020 года.":"All information, graphics, text, program code, etc. are the property of the website and are protected by law.\n\nThe agreement is published on September 23, 2020.",
    "2. Соглашение об использование файлов Cookie":"2. Agreement on the use of cookies",
    "Интернет-сайт  (далее — «Сайт») использует файлы cookie и схожие технологии, чтобы гарантировать максимальное удобство пользователям, предоставляя персонализированную информацию, запоминая предпочтения при навигации по сайту и его последующих посещениях, а также помогая получить нужную пользователю информацию. Информация, которую мы получаем посредством файлов cookie, помогает нам предоставлять Вам наши услуги в наиболее подходящем для Вас виде.":"The website (the “Site”) uses cookies and similar technologies to ensure the best user experience by providing personalized information, remembering preferences when navigating the site and on subsequent visits, and helping you get the information you need. The information we collect through cookies helps us to provide you with our services in the most appropriate way.",
    "Данное соглашение касается использования Сайтом информации, получаемой от пользователей Сайта. В этом документе также содержится информация о файлах cookie, об использовании файлов cookie Сайтом, а также о том, как вы можете отказаться от такого рода файлов.":"This agreement relates to the Site's use of information received from users of the Site. This document also contains information about cookies, how the Site uses cookies, and how you can opt out of cookies.",
    "Файл cookie – небольшой текстовый файл, размещаемый интернет-сайтом на персональном компьютере, телефоне либо другом устройстве пользователя с информацией о его навигации по интернет-сайту. В файлах cookie хранится информация о Ваших предпочтениях в интернете.":"A cookie is a small text file placed by an Internet site on a user's personal computer, phone or other device that provides information about how the user navigates the Internet. Cookies store information about your browsing habits.",
    "Файлы cookie используются в различных целях, в том числе, чтобы: \n• Анализировать информацию о посещении страниц пользователями для совершенствования Сайта.\n• Предоставлять сообщения и контент, созданные нами и третьими лицами, на данном сайте и сайтах других лиц, учитывая интересы пользователя.\n• Помогать пользователю в получении необходимой информации.\n• Определять количество посетителей и то, как они используют наш сайт, — для повышения эффективности сайта и для наилучшего понимания интересов их аудитории.":"Cookies are used for a variety of purposes, including to: \n- Analyze information about users' page visits to improve the Site.\n- Provide messages and content created by us and third parties on this Site and others' sites, tailored to the user's interests.\n- Assist the user in obtaining relevant information.\n- Determine the number of visitors and how they use our Site to improve the effectiveness of the Site and to better understand the interests of their audience.",
    "Прежде чем интернет-сайт установит файлы cookie на вашем компьютере, вы увидите всплывающее окно с просьбой дать согласие на установку этих файлов cookie. Предоставляя свое согласие на настройку наших файлов cookie, Вы даете нам возможность предоставлять Вам наилучшие возможности и обслуживание через наш интернет-сайт. Если вы хотите отказать в своем согласии на размещение файлов cookie, некоторые функции интернет-сайта могут работать не полностью или не по назначению.\nНи один из файлов cookie, установленных сайтом, никоим образом не ставит под угрозу вашу конфиденциальность. В используемых нами файлах cookie мы не сохраняем личную и конфиденциальную информацию, которая идентифицирует личность пользователя, такую как адрес, пароль, данные дебетовой или кредитной карты и т.д. Если Вы хотите избежать использование файлов cookie на данном интернет-сайте, то Вы можете в любой момент отключить сохранение файлов cookie в своем браузере, а затем удалить сохраненные в Вашем браузере файлы cookie, связанные с использованием нашего сайта.":"Before the website sets cookies on your computer, you will see a pop-up window asking you to consent to the setting of cookies. By providing your consent to the setting of our cookies, you enable us to provide you with the best possible features and service through our internet site. If you wish to refuse your consent to the setting of cookies, some features of the website may not function fully or as intended.\nNone of the cookies set by the website jeopardize your privacy in any way. The cookies we use do not store personal and sensitive information that identifies the user, such as address, password, debit or credit card details, etc. If you wish to avoid the use of cookies on this website, you can disable the saving of cookies in your browser at any time and then delete the cookies stored in your browser related to the use of our website.",
    "Обратите внимание: в таком случае отображение страниц и руководство по использованию интернет-сайта будут ограниченными.\nМы не несем ответственность за контент, способы сбора и обработки информации сторонними сайтами, в том числе сайтами, ссылки на которые могут быть опубликованы на нашем ресурсе. Пожалуйста, ознакомьтесь с политикой конфиденциальности тех ресурсов, которые Вы посещаете, прежде чем предоставлять свои данные.":"Please note: in this case, the display of pages and guidance on how to use the website will be limited.\nWe are not responsible for the content, information collection and processing practices of third-party sites, including sites that may link to our site. Please review the privacy policies of the resources you visit before submitting your information.",
    "3. Политика обработки персональных данных":"3. Personal data processing policy",
    "Настоящий документ определяет политику сайта  (далее – Оператор) в отношении обработки персональных данных пользователей сайта и излагает систему основных принципов, применяемых в отношении обработки персональных данных.":"This document defines the policy of the website (hereinafter referred to as the Operator) in relation to the processing of personal data of the website users and sets out a system of basic principles applicable to the processing of personal data.",
    "Политика в отношении обработки персональных данных пользователей сайта(далее - Политика) разработана с целью соблюдения требований законодательства Российской Федерации, содержащих персональные данные и идентификации пользователей, находящихся на сайте. Политика действует в отношении всех персональных данных, которые подлежат обработке Оператором.":"The Policy regarding the processing of personal data of website users (hereinafter - the Policy) is developed in order to comply with the requirements of the legislation of the Russian Federation, containing personal data and identification of users on the website. The Policy applies to all personal data to be processed by the Operator.",
    "Политика разработана в соответствии с Конституцией Российской Федерации, Гражданским кодексом Российской Федерации, Федеральным законом от 27 июля 2006 года № 152-ФЗ «О персональных данных» и иным действующим законодательством Российской Федерации в области защиты персональных данных.":"The Policy is developed in accordance with the Constitution of the Russian Federation, the Civil Code of the Russian Federation, Federal Law No. 152-FZ dated July 27, 2006 “On Personal Data” and other applicable legislation of the Russian Federation in the field of personal data protection.",
    "Политика устанавливает порядок обработки персональных данных пользователей сайта: действия по сбору, систематизации, накоплению, хранению, уточнению (обновлению, изменению), уничтожению персональных данных.":"The Policy is developed in accordance with the Constitution of the Russian Federation, the Civil Code of the Russian Federation, Federal Law No. 152-FZ dated July 27, 2006 “On Personal Data” and other applicable legislation of the Russian Federation in the field of personal data protection.",
    "Политика устанавливает обязательные для сотрудников Оператора, задействованных в обслуживании сайта, общие требования и правила по работе со всеми видами носителей информации, содержащими персональные данные пользователей сайта.":"The Policy establishes general requirements and rules for the Operator's employees involved in the maintenance of the website, which are binding for all types of data carriers containing personal data of the website users.",
    "В Политике не рассматриваются вопросы обеспечения безопасности персональных данных, отнесенных в установленном порядке к сведениям, составляющим государственную тайну Российской Федерации.":"The Policy does not address the issues of ensuring the security of personal data that are duly classified as state secrets of the Russian Federation.",
    "Термины и определения\n• Персональные данные – любая информация, относящаяся прямо или косвенно к определенному или определяемому физическому лицу (субъекту персональных данных). \n• Оператор – государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с другими лицами организующие и (или) осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными. \n• Обработка персональных данных - любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных. \n• Пользователь - пользователь сети Интернет и, в частности, сайта .\n• Автоматизированная обработка персональных данных – обработка персональных данных с помощью средств вычислительной техники. \n• Предоставление персональных данных – действия, направленные на раскрытие персональных данных определенному лицу или определенному кругу лиц. \n• Блокирование персональных данных – временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных). \n• Уничтожение персональных данных – действия, в результате которых становится невозможным восстановить содержание персональных данных в информационной системе персональных данных и/или в результате которых уничтожаются материальные носители персональных данных. \n• Обезличивание персональных данных – действия, в результате которых становится невозможным без использования дополнительной информации определить принадлежность персональных данных к конкретному субъекту персональных данных.":"Terms and definitions \n- Personal data - any information relating directly or indirectly to a certain or definable natural person (subject of personal data). \Operator - a state body, a municipal body, a legal entity or an individual, independently or jointly with other persons organizing and (or) carrying out the processing of personal data, as well as determining the purposes of personal data processing, the composition of personal data subject to processing, actions (operations) performed with personal data. \n- Processing of personal data - any action (operation) or set of actions (operations) performed with or without the use of automation means with personal data, including collection, recording, systematization, accumulation, storage, clarification (update, change), extraction, use, transfer (distribution, provision, access), depersonalization, blocking, deletion, destruction of personal data. \n- User - a user of the Internet and, in particular, the website. \n- Automated processing of personal data - processing of personal data using computer hardware. \Provision of personal data - actions aimed at disclosure of personal data to a certain person or a certain circle of persons. \n- Blocking of personal data - temporary cessation of personal data processing (except for cases when processing is necessary to clarify personal data). \n- Destruction of personal data - actions, as a result of which it becomes impossible to restore the content of personal data in the information system of personal data and/or as a result of which material carriers of personal data are destroyed. \Personal data de-identification - actions that make it impossible to determine, without the use of additional information, whether personal data belong to a particular subject of personal data.",
    "Оператор обеспечивает конфиденциальность и безопасность персональных данных при их обработке в соответствии с требованием законодательства и не раскрывает третьим лицами и не распространяет персональные данные без согласия на это субъекта персональных данных, если иное не предусмотрено федеральным законодательством. В соответствии с перечнем персональных данных, обрабатываемых на сайте, персональные данные пользователей сайта являются конфиденциальной информацией.":"The Operator ensures confidentiality and security of personal data during their processing in accordance with the requirement of the legislation and does not disclose to third parties and does not distribute personal data without the consent of the subject of personal data, unless otherwise provided for by federal legislation. In accordance with the list of personal data processed on the website, personal data of website users is confidential information.",
    "Основные права и обязанности Оператора и Субъекта персональных данных.":"Basic rights and obligations of the Operator and the Personal Data Subject.",
    "Оператор имеет право:\n• получать персональные данные от субъектов персональных данных и от третьих лиц (лиц, не являющихся субъектами персональных данных), при этом Оператор выполняет обязанности, предусмотренные Федеральным законом от 27 июля 2006 года № 152-ФЗ «О персональных данных»;\n• самостоятельно определять состав и перечень мер, необходимых и достаточных для обеспечения выполнения обязанностей, предусмотренных Законом о персональных данных и принятыми в соответствии с ним нормативными правовыми актами, если иное не предусмотрено Законом о персональных данных или другими федеральными законами;\n• в случае отзыва субъектом персональных данных согласия на обработку персональных данных Оператор вправе продолжить обработку персональных данных без согласия субъекта персональных данных при наличии оснований, указанных в Законе о персональных данных.":"The Operator has the right to:\n- receive personal data from personal data subjects and from third parties (persons who are not personal data subjects), while the Operator fulfills the obligations stipulated by the Federal Law of July 27, 2006, No. 152-FZ “On Personal Data”;\n- independently determine the composition and list of measures necessary and sufficient to ensure the fulfillment of obligations stipulated by the Law on Personal Data and regulatory legal acts adopted in accordance with it, unless otherwise stipulated by the Law on Personal Data; \n- independently determine the list of measures necessary and sufficient to ensure the fulfillment of obligations stipulated by the Law on Personal Data and regulatory legal acts adopted in accordance with it, unless otherwise stipulated by the Law on Personal Data.",
    "Оператор обязан:\n• организовывать обработку персональных данных в соответствии с требованиями Закона о персональных данных;\n• отвечать на обращения и запросы субъектов персональных данных и их законных представителей в соответствии с требованиями Закона о персональных данных.":"The operator is obliged to:\n- organize the processing of personal data in accordance with the requirements of the Law on Personal Data;\n- respond to appeals and requests of personal data subjects and their legal representatives in accordance with the requirements of the Law on Personal Data.",
    "Субъект персональных данных имеет право:\n• получать информацию, касающуюся обработки его персональных данных, за исключением случаев, предусмотренных федеральными законами. Сведения предоставляются субъекту персональных данных Оператором в доступной форме, и в них не должны содержаться персональные данные, относящиеся к другим субъектам персональных данных, за исключением случаев, когда имеются законные основания для раскрытия таких персональных данных. Перечень информации и порядок ее получения установлен Законом о персональных данных;\n• требовать от оператора уточнения его персональных данных, их блокирования или уничтожения в случае, если персональные данные являются неполными, устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки;\n• иные права, предусмотренные главой 3 Федерального закона от 27 июля 2006 года № 152-ФЗ «О персональных данных»":"The subject of personal data has the right to:\n- receive information regarding the processing of his/her personal data, except for cases provided for by federal laws. Information shall be provided to the subject of personal data by the Operator in an accessible form and shall not contain personal data relating to other subjects of personal data, unless there are legal grounds for disclosure of such personal data. The list of information and the procedure for obtaining it is established by the Law on Personal Data;\n- demand from the Operator to clarify his/her personal data, block or destroy it if the personal data is incomplete, outdated, inaccurate, illegally obtained or is not necessary for the stated purpose of processing;\n- other rights provided for by Chapter 3 of the Federal Law No. 152-FZ “On Personal Data” dated July 27, 2006",
    "Цели сбора персональных данных":"Purposes of personal data collection",
    "Обработка персональных данных ограничивается достижением конкретных, заранее определенных и законных целей. Не допускается обработка персональных данных, несовместимая с целями сбора персональных данных.":"The processing of personal data is limited to the achievement of specific, predetermined and legitimate purposes. Processing of personal data incompatible with the purposes of personal data collection is not allowed.",
    "Обработке подлежат только персональные данные, которые отвечают целям их обработки.":"Only personal data that meet the purposes for which they are processed shall be processed.",
    "Обработка персональных данных пользователей сайта осуществляется исключительно в целях предоставления пользователю возможности взаимодействовать с сайтом.":"The processing of personal data of website users is carried out solely for the purpose of enabling the user to interact with the website.",
    "Сведениями, составляющими персональные данные на сайте, является любая информация, относящаяся к определенному или определяемому на основании такой информации физическому лицу (субъекту персональных данных).":"Information constituting personal data on the website is any information relating to a certain or determined on the basis of such information natural person (subject of personal data).",
    "Объем обрабатываемых персональных данных.":"Amount of personal data processed.",
    "Содержание и объем обрабатываемых персональных данных пользователей сайта соответствует заявленным целям обработки, предусмотренным в разделе 3 настоящей Политики. Обрабатываемые персональные данные не должны быть избыточными по отношению к заявленным целям их обработки.":"The content and scope of the processed personal data of the website users corresponds to the stated purposes of processing provided for in Section 3 of this Policy.The processed personal data shall not be redundant in relation to the stated purposes of their processing.",
    "Оператор может обрабатывать следующие персональные данные пользователей:\n• источник захода на сайт (сайты) и информация поискового или рекламного запроса;\n• данные о пользовательском устройстве (среди которых разрешение, версия и другие атрибуты, характеризующие пользовательское устройство);\n• пользовательские клики, просмотры страниц, заполнения полей, показы и просмотры баннеров и видео;\n• данные, характеризующие аудиторные сегменты;\n• параметры сессии;\n• данные о времени посещения;\n• идентификатор пользователя, хранимый в cookie;\n• фамилия;\n• имя;\n• отчество;\n• номер контактного телефона;\n• адрес электронной почты;":"The Operator may process the following personal data of users: \n- the source of access to the site(s) and information of search or advertising request;\n- data about the user device (including resolution, version and other attributes characterizing the user device);\n- user clicks, page views, filling in fields, displays and views of banners and videos; \n- data characterizing audience segments;\n- session parameters;\n- time of visit data;\n- user ID stored in cookies;\n- last name;\n- first name;\n- middle name;\n- contact phone number;\n- e-mail address;",
    "Написать в онлайн чат":"Write to online chat",
    "Написать на почту":"Write to email",
    "Предложения, сотрудничество:":"Suggestions, cooperation:",
    "Мы на форумах":"We are on the forums",
    "Мы на мониторингах":"We are on monitoring",
    "По вопросам реферального вознаграждения обращайтесь в техническую поддержку или пишите на почту help.@gmail.com": "For questions about referral reward please contact technical support or write to help.@gmail.com.",
  "Реферальные начисления рассчитываются от прибыли сервиса. Существуют направления обмена, по которым сервис не получает прибыль. За обмены по таким направлениям реферальные вознаграждения не начисляются.": "Referral charges are calculated on the profit of the service. There are directions of exchange, on which the service does not receive profit. Referral fees are not charged for exchanges in such directions.",
  "Своевременное исполнение заявок": "Timely execution of requests",
  "Нет ограничений на вывод вознаграждений": "No restrictions on withdrawal of rewards",
  "Единый размер вознаграждения - 0.5%": "Unified remuneration rate - 0.5%",
  "Зарегистрируйтесь как мониторинг и получите реферальную ссылку": "Register as a monitor and get a referral link",
  "В случае, если сервис не имеет заработка с проведенной транзакции вашим рефералом, партнёрское вознаграждение не начисляется. Вывести вознаграждение можно на любые направления, присутствующие в личном кабинете пользователя": "If the service has no earnings from a transaction made by your referral, the affiliate reward is not credited. You can withdraw the reward to any directions present in the user's personal cabinet",
  "с 51 и до пересмотра системы": " from 51 and before system revision",
  "с 16 до 50 реферала": " from 16 to 50 referrals",
  "с 1 до 15 реферала": " from 1 to 15 referrals",
  "Условия реферальных вознаграждений за ваших рефералов:": "Terms of referral rewards for your referrals:",
  "Получаете вознаграждение любым удобным для вас способом": "Receive your reward in any way you like",
  "Получаете вознаграждение за каждую успешную транзакцию": "Receive a reward for each successful transaction",
  "Скопируйте ссылку и отправьте знакомым или разместите на вашем сайте, канале": "Copy the link and send to people you know or post it on your website, channel",
  "Регистрируетесь на нашем сайте": "Register on our website",
  "Зарегистрируйтесь, скопируйте Реферальную ссылку в личном кабинете и отправьте другу, коллеге, знакомым! Чем больше друзей, больше вознаграждение!": "Register, copy the Referral link in your personal cabinet and send it to your friend, colleague, acquaintances! More friends, more rewards!",
  "Получайте до 0,9% с каждого реферала": "Receive up to 0.9% from each referral",
  "Партнёрам": "Partners",
  "Если Пользователь не согласен с условиями настоящей Политики, то он должен немедленно удалить свой профиль с сайта либо уведомить о своем несогласии Оператора, в противном случае продолжение использования пользователем сайта означает, что пользователь согласен с условиями настоящей Политики.": "If the User does not agree with the terms of this Policy, the User must immediately remove his/her profile from the site or notify the Operator of his/her disagreement, otherwise the User's continued use of the site means that the User agrees with the terms of this Policy.",
  "В соответствии со статьей 435 Гражданского кодекса Российской Федерации, настоящий документ признается офертой. В соответствии со статьей 438 Гражданского Кодекса Российской Федерации, безусловным принятием (акцептом) условий настоящей политики считается факт подачи пользователем заявки на интернет-сайте  и согласием на обработку своих персональных данных. Согласие на обработку персональных данных, получаемое путем акцепта настоящей оферты, не требует двустороннего подписания и действительно в электронном виде.": "In accordance with Article 435 of the Civil Code of the Russian Federation, this document is recognized as an offer. In accordance with Article 438 of the Civil Code of the Russian Federation, unconditional acceptance (acceptance) of the terms of this policy is considered to be the fact that the user submits an application on the website  and agrees to the processing of his/her personal data. The consent to the processing of personal data, obtained by accepting this offer, does not require bilateral signing and is valid in electronic form.",
  "Условия Политики устанавливаются, изменяются и отменяются Оператором в одностороннем порядке без предварительного уведомления Пользователя. С момента размещения на сайте новой редакции Политики предыдущая редакция считается утратившей свою силу. В случае существенного изменения условий Политики Оператор извещает об этом пользователей путем размещения на сайте соответствующего сообщения.": "The terms and conditions of the Policy are established, amended and canceled by the Operator unilaterally without prior notice to the User. From the moment a new version of the Policy is posted on the website, the previous version shall be deemed null and void. In case of a material change of the Policy terms and conditions, the Operator shall notify the users thereof by posting a corresponding message on the website.",
  "В случае изменения действующего законодательства Российской Федерации, внесения изменений в нормативные документы по защите персональных данных настоящая Политика действует в части, не противоречащей действующему законодательству до приведения его в соответствие с такими.": "In the event of changes in the current legislation of the Russian Federation, amendments to the regulatory documents on personal data protection, this Policy shall be in force to the extent not contradicting the current legislation until it is brought into compliance with such.",
  "Ответственность за нарушение требований законодательства Российской Федерации и нормативных актов в сфере обработки и защиты персональных данных определяется в соответствии с законодательством Российской Федерации.": "Responsibility for violation of the requirements of the legislation of the Russian Federation and regulations in the field of processing and protection of personal data is determined in accordance with the legislation of the Russian Federation.",
  "Контроль за исполнением требований настоящей Политики осуществляется уполномоченным лицом, ответственным за организацию обработки персональных данных у Оператора.": "Control over the fulfillment of the requirements of this Policy shall be exercised by the authorized person responsible for the organization of personal data processing at the Operator.",
  "Заключительные положения.": "Final Provisions.",
  "В соответствии со статьей 435 Гражданского кодекса Российской Федерации, настоящий документ признается офертой. В соответствии со статьей 438 Гражданского Кодекса Российской Федерации, безусловным принятием (акцептом) условий настоящей политики считается факт подачи пользователем заявки на интернет-сайте  и согласием на обработку своих персональных данных. Согласие на обработку персональных данных, получаемое путем акцепта настоящей оферты, не требует двустороннего подписания и действительно в электронном виде.":"In accordance with Article 435 of the Civil Code of the Russian Federation, this document is recognized as an offer. In accordance with Article 438 of the Civil Code of the Russian Federation, the unconditional acceptance of the terms of this policy is the fact that the user submits an application on the website and consents to the processing of their personal data. Consent to the processing of personal data obtained by accepting this offer does not require bilateral signature and is valid in electronic form.",
  "Уничтожение персональных данных осуществляется путем стирания информации с использованием сертифицированного программного обеспечения с гарантированным уничтожением (в соответствии с заданными характеристиками для установленного программного обеспечения с гарантированным уничтожением).": "Destruction of personal data is performed by erasing the information using certified software with guaranteed destruction (in accordance with the specified characteristics for the installed software with guaranteed destruction).",
  "В случае отсутствия возможности уничтожения персональных данных Оператор осуществляет блокирование таких персональных данных.": "If it is impossible to destroy personal data, the Operator blocks such personal data.",
  "Субъект персональных данных вправе в письменной форме требовать уничтожения своих персональных данных в случае, если персональные данные являются неполными, устаревшими, недостоверными, незаконно полученными или не являются необходимыми для заявленной цели обработки.": "The personal data subject has the right to request in writing the destruction of his/her personal data if the personal data is incomplete, outdated, unreliable, illegally obtained or not necessary for the stated purpose of processing.",
  "При достижении целей обработки персональных данных, а также в случае отзыва субъектом персональных данных согласия на их обработку персональные данные подлежат уничтожению, если:\n• иное не предусмотрено договором, стороной которого, выгодоприобретателем или поручителем по которому является субъект персональных данных;\n• оператор не вправе осуществлять обработку без согласия субъекта персональных данных на основаниях, предусмотренных Законом о персональных данных или иными федеральными законами;\n• иное не предусмотрено другим соглашением между Оператором и субъектом персональных данных.": "When the purposes of personal data processing are achieved, as well as in case the subject of personal data withdraws his/her consent to their processing, the personal data shall be destroyed, unless:\n• otherwise provided for by the contract to which the subject of personal data is a party, beneficiary or guarantor;\n• the operator has no right to carry out processing without the consent of the subject of personal data on the grounds provided for by the Personal Data Law or other federal laws;\n• otherwise provided for by another agreement between the operator and the subject of personal data",
  "Удаление и уничтожение персональных данных": "Deletion and destruction of personal data",
  "Оператором не ведется обработка персональных данных Пользователей на бумажных носителях информации.": "The Operator does not process Users' personal data on paper.",
  "По истечении вышеуказанного срока хранения персональных данных пользователя персональные данные пользователя удаляются автоматически заданным алгоритмом, который задает Оператор.": "Upon expiration of the above-mentioned period of storage of the user's personal data, the user's personal data is deleted automatically by an algorithm set by the Operator.",
  "В случае удаления данных с сайта по инициативе одной из сторон, а именно прекращения использования сайта, персональные данные пользователя хранятся в базах данных Оператора пять лет в соответствии с законодательством Российской Федерации.": "In case of deletion of data from the site on the initiative of one of the parties, namely termination of the use of the site, the personal data of the user are stored in the Operator's databases for five years in accordance with the legislation of the Russian Federation.",
  "Срок хранения персональных данных пользователей начинает течь с момента дачи согласия на обработку персональных данных, получаемого путем акцепта оферты, не требующей двустороннего подписания и действительной в электронном виде, и действуют до тех пор, пока пользователь не заявит о своем желании удалить свои персональные данные с сайта.": "The retention period of personal data of users begins to run from the moment of giving consent to the processing of personal data, obtained by accepting an offer that does not require bilateral signature and is valid in electronic form, and shall remain in force until the user declares his/her wish to delete his/her personal data from the website.",
  "Оператор осуществляет только хранение персональных данных Пользователей на Сайте.": "The Operator only stores personal data of Users on the Website.",
  "Порядок и сроки хранения персональных данных.": "Procedure and terms of storage of personal data.",
  "При сборе персональных данных, в том числе посредством информационно-телекоммуникационной сети Интернет, Оператор обеспечивает запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение персональных данных граждан Российской Федерации с использованием баз данных, находящихся на территории Российской Федерации, за исключением случаев, указанных в Законе о персональных данных.": "When collecting personal data, including through the information and telecommunications network Internet, the Operator shall ensure recording, systematization, accumulation, storage, clarification (update, change), extraction of personal data of citizens of the Russian Federation using databases located on the territory of the Russian Federation, except for cases specified in the Law on Personal Data.",
  "Оператор осуществляет хранение персональных данных в форме, позволяющей определить субъекта персональных данных, не дольше, чем этого требуют цели обработки персональных данных, если срок хранения персональных данных не установлен федеральным законом, договором.": "The Operator shall store personal data in a form that allows to identify the subject of personal data for no longer than required by the purposes of personal data processing, unless the period of personal data storage is established by federal law, contract.",
  "Оператор принимает необходимые правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, распространения и других несанкционированных действий, в том числе: • определяет угрозы безопасности персональных данных при их обработке; • принимает локальные нормативные акты и иные документы, регулирующие отношения в сфере обработки и защиты персональных данных; • создает необходимые условия для работы с персональными данными; • организует учет документов, содержащих персональные данные; • организует работу с информационными системами, в которых обрабатываются персональные данные; • хранит персональные данные в условиях, при которых обеспечивается их сохранность и исключается неправомерный доступ к ним.": "The Operator takes the necessary legal, organizational and technical measures to protect personal data from unlawful or accidental access to them, destruction, modification, blocking, dissemination and other unauthorized actions, including: - determines threats to the security of personal data during their processing; - adopts local normative acts and other documents regulating relations in the field of processing and protection of personal data; - creates the necessary conditions for working with personal data; - organizes accounting of documents containing personal data; - organizes work with information systems in which personal data are processed; - stores personal data in conditions that ensure their safety and exclude unauthorized access to them.",
  "Передача персональных данных органам дознания и следствия, в Федеральную налоговую службу, Пенсионный фонд Российской Федерации, Фонд социального страхования и другие уполномоченные органы исполнительной власти и организации осуществляется в соответствии с требованиями законодательства Российской Федерации.": "The transfer of personal data to the bodies of inquiry and investigation, the Federal Tax Service, the Pension Fund of the Russian Federation, the Social Insurance Fund and other authorized executive authorities and organizations is carried out in accordance with the requirements of the legislation of the Russian Federation.",
  "Не допускается раскрытие и предоставление третьим лицам и распространение персональных данных без согласия субъекта персональных данных, если иное не предусмотрено федеральным законом.": "It is not allowed to disclose and provide to third parties and disseminate personal data without the consent of the subject of personal data, unless otherwise provided for by federal law.",
  "К обработке персональных данных допускаются работники Оператора, в должностные обязанности которых входит обработка персональных данных.": "The Operator's employees whose job description includes personal data processing are allowed to process personal data.",
  "Оператор осуществляет как автоматизированную, так и неавтоматизированную обработку персональных данных.": "The Operator performs both automated and non-automated processing of personal data.",
  "Обработка персональных данных осуществляется с согласия субъектов персональных данных на обработку их персональных данных, а также без такового в случаях, предусмотренных законодательством Российской Федерации.": "Personal data processing is carried out with the consent of personal data subjects to the processing of their personal data, as well as without it in cases provided for by the legislation of the Russian Federation.",
  "Обработка персональных данных осуществляется Оператором в соответствии с требованиями законодательства Российской Федерации.": "Processing of personal data is carried out by the Operator in accordance with the requirements of the legislation of the Russian Federation.",
  "Порядок и условия обработки персональных данных.": "Procedure and conditions of personal data processing.",
  "Оператор не осуществляет трансграничную передачу персональных данных.": "The Operator does not perform cross-border transfer of personal data.",
  "Оператор не осуществляет обработку биометрических персональных данных.": "The Operator does not process biometric personal data.",
  "Оператором не осуществляется обработка специальных категорий персональных данных, касающихся расовой, национальной принадлежности, политических взглядов, религиозных или философских убеждений, состояния здоровья, интимной жизни, за исключением случаев, предусмотренных законодательством Российской Федерации.": "The Operator does not process special categories of personal data concerning race, nationality, political views, religious or philosophical beliefs, state of health, intimate life, except as provided for by the legislation of the Russian Federation.",
  "Да, конечно. Для этого в окне с Авторизацией нажмите на кнопку “Забыл пароль”, введите адрес своей электронной почты, на которую происходила регистрация аккаунта, и следуйте инструкциям в письме, которое Вам поступит почти мгновенно. Если Вы потеряли доступ к своей почте, обратитесь в техническую поддержку вашего почтового аккаунта. Если по каким-либо причинам письмо Вам не приходит, обратитесь в онлайн-чат на сайте либо напишите на почту help.@gmail.com": "Yes, of course. To do this, click on \"Forgot password\" in the Authorization window, enter your e-mail address where you registered your account, and follow the instructions in the e-mail you will receive almost immediately. If you have lost access to your email, please contact the technical support of your email account. If for some reason you do not receive the e-mail, please contact the online chat on the website or write to help.@gmail.com.",
  "Я забыл пароль от аккаунта, можно ли его восстановить?": "I forgot my account password, is it possible to recover it?",
  "Некоторые расширения для браузера могут блокировать онлайн-чат на сайте, в таком случае Вы можете зайти с другого браузера и попробовать снова. Если это не помогает, напишите нам на почту help.@gmail.com": "Some browser extensions may block online chat on the site, in this case you can log in from another browser and try again. If this doesn't work, please email us at help.@gmail.com.",
  "У меня не работает чат на сайте, как мне вам написать?": "My website chat is not working, how do I message you?",
  "2. Следует проверить папку «Спам» на Вашей почте;": "2. You should check your spam folder in your email;",
  "3. Следует проверить настройки Вашего спам-фильтра;\nВ случае если ни один из пунктов Вам не помог, пожалуйста, обратитесь в круглосуточную поддержку на нашем сайте.":"3. You should check your spam filter settings;\nIn case none of the items helped you, please contact our 24/7 support on our website.",
  "1. Следует убедиться, что при регистрации Вы указали верный адрес. Для этого пройдите процедуру регистрации повторно. Если Вы увидите сообщение “электронный адрес занят” это означает, что электронный адрес занят и он введен верно.":"1. You should make sure that you have entered the correct address when registering. To do this, go through the registration procedure again. If you see the message \"e-mail address is busy\" it means that the e-mail address is busy and it is entered correctly.",
  "Если письмо с подтверждением электронного адреса Вам не пришло, то следует убедиться, что при регистрации Вы указали правильный e-mail. Так же многие почтовые сервисы могут воспринимать наши сообщения как нежелательные и помечать их как “спам” или же не доставлять их до Вас. Внизу указаны возможные варианты для решения проблемы.": "If you do not receive a confirmation e-mail, please make sure that you have entered the correct e-mail address when you registered. Also, many email services may perceive our messages as unwanted and mark them as \"spam\" or not deliver them to you. Below you can find possible ways to solve the problem.",
  "Что делать, если не приходит письмо на почту?": "What should I do if I don't get a letter in the mail?",
  "Да. У нас есть весьма понятная и прозрачная партнерская программа, с её условиями Вы можете ознакомится": "Yes. We have a very clear and transparent affiliate program, with its terms and conditions you can read.",
  "Есть ли у вас партнерская или реферальная программа?": "Do you have an affiliate or referral program?",
  "Мы должны знать, что карта у Вас на руках и что обмен совершаете именно Вы. Многие мошенники пытаются воспользоваться украденными данными, чтобы перевести средства, не имея на руках пластиковой карты. Поэтому, верификация является простым, но довольно надежным способом защиты наших пользователей.": "We need to know that you have the card in your possession and that you are the one making the exchange. Many fraudsters try to use stolen data to transfer funds without having a plastic card in hand. Therefore, verification is a simple but quite reliable way to protect our users.",
  "Зачем нужна верификация?": "Why do you need verification?",
  "Все обмены производятся только через заявку на сайте, в заявке Вы получаете все необходимые реквизиты для совершения обмена. Если Вам предлагают совершить обмен в телеграме — Вы попали на мошенников, которые представляются нами. Пожалуйста, обязательно сообщите нам о таких случаях, чтобы мы могли принять меры! Все наши официальные контакты для связи указаны на странице “Контакты”": "All exchanges are made only through the application on the site, in the application you get all the necessary details for the exchange. If you are offered to make an exchange in Telegram - you have fallen on scammers who represent themselves as us. Please be sure to inform us about such cases so that we can take action! All our official contacts are listed on the \"Contact Us\" page",
  "Я обменял средства через телеграм/телеграм-бота, по договоренности на форуме, скайпе, вайбере, но не получил свои средства. Почему?": "I exchanged funds via telegram/telegram-bot, by agreement on the forum, skype, viber, but did not receive my funds. Why?",
  "Если Вам нужна ссылка на транзакцию, напишите нам в онлайн-чат на сайте, либо на почту help.@gmail.com Укажите номер Вашей заявки и оператор предоставит вам ссылку.": "If you need a link to the transaction, write to us in the online chat on the website, or email help.@gmail.com Specify your application number and the operator will provide you with the link.",
  "Мне нужна ссылка на транзакцию, где мне ее взять?": "I need a transaction reference, where do I get it?",
  "Любой зарегистрированный пользователь, совершая любой обмен, уже участвует в формировании своей накопительной скидки. После достижения любого из этапов этой нашей Программы лояльности Вы получаете коэффициент, который применяется к формированию более выгодного курса обмена именно для Вас при каждом следующем обмене. То есть, Вы получаете скидку на любой обмен в любом направлении. С более детальной информацией Вы можете ознакомится после регистрации в своем Личном кабинете.": "Any registered user, making any exchange, already participates in the formation of his/her accumulative discount. After reaching any of the stages of this our Loyalty Program you get a coefficient, which is applied to the formation of a more favorable exchange rate just for you at each next exchange. In other words, you get a discount for any exchange in any direction. You can read more detailed information after registration in your personal cabinet.",
  "Какие бонусы есть для постоянных клиентов?": "What bonuses are there for loyal customers?",
  "Комиссии нашего сервиса уже включены в курс обмена и отображаются на стадии оформления заявки.": "The commissions of our service are already included in the exchange rate and are displayed at the stage of application.",
  "Какая у вас комиссия?": "What's your commission?",
  "Нет, регистрация не обязательна. Но если Вы зарегистрируетесь на нашем сервисе, то сможете участвовать в нашей партнерской программе.": "No, registration is not required. But if you register on our service, you will be able to participate in our affiliate program.",
  "Обязательна ли регистрация на вашем сайте?": "Is registration on your site mandatory?",
  "Наш сервис функционирует 24 часа в сутки, 7 дней в неделю без перерывов.": "Our service operates 24 hours a day, 7 days a week without interruption.",
  "В какое время вы работаете?": "What time do you work?",
  "1. Оплата по заявке не поступала в течении 1 часа с момента создания.":"1. Payment for the request was not received within 1 hour from the moment of creation.",
  "2. Была переведена сумма, которая не соответствует указанной вами сумме в заявке. Если заявка была удалена, обратитесь в онлайн-чат на сайте либо на почту help.@gmail.com":"2. An amount was transferred that does not correspond to the amount you specified in the request. If the request has been deleted, please contact online chat on the website or e-mail help.@gmail.com.",
  "Операции по обмену Биткоина проводятся только после получения 1 подтверждения от сети Bitcoin.\nБывают случаи, когда ваша заявка удаляется, это происходит если:":"Bitcoin exchange operations are carried out only after receiving 1 confirmation from the Bitcoin network.\nThere are cases when your application is deleted, it happens if:",
  "Да, для этого Вам необходимо связаться в онлайн-чате на сайте с оператором и обсудить с ним все детали обмена. Мы постараемся обеспечить выполнение Вашей заявки.": "Yes, for this you need to contact the operator in the online chat on the website and discuss with him all the details of the exchange. We will do our best to ensure that your request is fulfilled.",
  "Можно ли обменять сумму больше, чем указана на сайте?": "Can I exchange more than the amount listed on the website?",
  "Обмен ниже минимальной суммы невозможен.": "Exchanges below the minimum amount are not possible.",
  "Могу ли я обменять сумму меньше минимальной?": "Can I exchange for less than the minimum amount?",
  "В случае если Вы создали заявку на нашем сервисе в направлении EXMO, после того как Ваша заявка будет исполнена, Вы сможете получить свой EXMO-CODE на Вашей почте.": "In case you have created an application on our service in the direction of EXMO, after your application will be executed, you will be able to receive your EXMO-CODE on your mail.",
  "Куда придет мой EXMO-CODE?": "Where will my EXMO-CODE come?",
  "Я перевел Биткоин, но не получил выплату, в чем дело?": "I transferred Bitcoin but didn't receive the payout, what's the matter?",
  "Для того, чтобы средства поступили на кошелек, требуется в среднем от 3 до 6 подтверждений сети Биткоин. Скорость подтверждения зависит от загруженности сети Биткоин, чем больше неподтвержденных транзакций, тем дольше будет подтверждаться транзакция. Загруженность сети вы всегда можете отследить здесь.": "An average of 3 to 6 Bitcoin network confirmations are required for funds to reach the wallet. The speed of confirmation depends on the busy Bitcoin network, the more unconfirmed transactions, the longer it will take to confirm the transaction. You can always track the network load here.",
  "Я купил Биткоин, средства мне не пришли, а заявка имеет статус “Обработана”, что делать?": "I bought Bitcoin, the funds did not come to me, and the application has the status \"Processed\", what to do?",
  "Если Ваша заявка не выполнена и средства не были отправлены, Ваша заявка может быть отменена и средства возвращены Вам с вычетом комиссии внутри платежной системы. В случае, если заявка была выполнена, отмена обмена невозможна.": "If your request is not fulfilled and the funds have not been sent, your request can be canceled and the funds returned to you with deduction of commission within the payment system. If the request has been completed, the exchange cannot be canceled.",
  "Могу ли я отказаться от обмена, если уже оплатил заявку?": "Can I cancel an exchange if I have already paid for the application?",
  "К сожалению, мы не сможем вернуть ваши средства. Все что мы можем сделать, это отправить вам реквизиты, куда средства ушли. Будьте внимательны при вводе данных!": "Unfortunately, we will not be able to refund your funds. All we can do is send you the details of where the funds went. Be careful when entering the data!",
  "Я указал неверные реквизиты и средства не пришли, что делать?": "I specified wrong details and the funds did not come, what should I do?",
  "Если по какой-либо причине Вы не смогли нажать кнопку “Я оплатил”, напишите нам в онлайн-чат на сайте либо на почту help.@gmail.com": "If for any reason you were not able to click the \"I paid\" button, please write to us in online chat on the website or by e-mail to help.@gmail.com.",
  "Я совершил оплату, а страница с кнопкой “Я оплатил” пропала, что делать?": "I made a payment and the page with the \"I paid\" button is gone, what should I do?",
  "Мы отправляем средства в течении 1-10 минут после получения от Вас оплаты.": "We ship funds within 1-10 minutes of receiving payment from you.",
  "Сколько длится обмен?": "How long does the exchange last?",
  "Статус заявки Вы можете отслеживать в Личном кабинете либо на почте, которую Вы указали в заявке.": "You can track the status of your application in myAlpari or on the mail you specified in the application.",
  "Где мне следить за статусом моей заявки?": "Where do I keep track of the status of my application?",
  "3. На следующей странице необходимо ознакомиться с информацией вверху страницы, далее скопировать реквизиты сайта, совершить оплату и нажать кнопку “Я ОПЛАТИЛ”.": "3. on the next page you should read the information at the top of the page, then copy the site details, make payment and click \"I PAYED\".",
  "2. После чего в поле “ВВОД ДАННЫХ” введите необходимые данные для обмена. В этом же столбце Вы можете посмотреть курс обмена. В него уже включена комиссия нашего сервиса. Нажмите кнопку “ПЕРЕЙТИ К ОПЛАТЕ”.": "2. Then in the field \"DATA ENTRY\" enter the necessary data for exchange. In the same column you can see the exchange rate. It already includes the commission of our service. Click the \"Proceed to Payment\" button.",
  "1. На главной странице сайта, Вам необходимо выбрать валюту “ОТДАЮ” и валюту “ПОЛУЧАЮ”, ввести сумму в калькулятор и система посчитает сумму, которую вы получите.": "1. On the main page of the site, you need to select the \"GIVE\" currency and the \"GET\" currency, enter the amount in the calculator and the system will calculate the amount you will receive.",
  "Как совершить обмен на вашем сайте?": "How do I make an exchange on your site?",
  "Пользователям":"For users",
  "Мониторингам":"For monitorings",
  "В случае, если сервис не имеет заработка с проведенной транзакции вашим рефералом, партнёрское вознаграждение не начисляется. Вывести вознаграждение можно на любые направления, присутствующие в личном кабинете пользователя":"If the service does not receive any income from the transaction carried out by your referral, the affiliate reward is not accrued. The reward can be withdrawn to any directions present in the user's personal account",

  }
};

$(document).ready(function() {
    // Add translation trigger to language switch button
    $('._HeaderLangSwitch_95g91_8').click(function() {
        toggleLanguage();
    });

    function updateLangIcon() {
        const iconSvg = currentLang === 'ru' ? 
            `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" name="icon-ru" class="icon-frame">
                <g clip-path="url(#clip0_5506_1511)">
                    <path d="M11.9625 0.75C7.08745 0.75 2.92495 3.9 1.38745 8.25H22.6124C21.0374 3.9 16.8749 0.75 11.9625 0.75Z" fill="#F9F9F9"></path>
                    <path d="M11.9625 23.25C16.875 23.25 21.0375 20.1 22.575 15.75H1.38745C2.92495 20.1375 7.08745 23.25 11.9625 23.25Z" fill="#ED4C5C"></path>
                    <path d="M1.3875 8.25C0.975 9.4125 0.75 10.6875 0.75 12C0.75 13.3125 0.975 14.5875 1.3875 15.75H22.6125C23.025 14.5875 23.25 13.3125 23.25 12C23.25 10.6875 23.025 9.4125 22.6125 8.25H1.3875Z" fill="#428BC1"></path>
                    <circle cx="12" cy="12" r="11.5" stroke="#D9D9D9"></circle>
                </g>
            </svg>` :
            `<svg xmlns="http://www.w3.org/2000/svg" class="icon-frame" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><g fill-rule="nonzero"><path fill="#999" d="M256 0c70.68 0 134.69 28.66 181.01 74.99C483.34 121.31 512 185.32 512 256c0 70.68-28.66 134.69-74.99 181.01C390.69 483.34 326.68 512 256 512c-70.68 0-134.69-28.66-181.01-74.99C28.66 390.69 0 326.68 0 256c0-70.68 28.66-134.69 74.99-181.01C121.31 28.66 185.32 0 256 0z"/><path fill="#fff" d="M256 19.48c65.29 0 124.46 26.48 167.25 69.27l1.09 1.18c42.14 42.72 68.17 101.37 68.17 166.06 0 65.31-26.49 124.46-69.28 167.25l-1.19 1.09c-42.72 42.16-101.4 68.19-166.04 68.19-65.23 0-124.38-26.51-167.18-69.33-42.84-42.74-69.34-101.89-69.34-167.2 0-65.31 26.48-124.45 69.27-167.24C131.54 45.96 190.69 19.48 256 19.48z"/><path fill="#B22234" d="M256 39.59c39.48 0 76.49 10.58 108.37 29.04H147.63C179.51 50.17 216.52 39.59 256 39.59zm155.84 66.28c9.16 9.48 17.42 19.82 24.72 30.85H75.43c7.29-11.09 15.59-21.46 24.72-30.85h311.69zm44.41 67.97c4.1 9.97 7.46 20.28 10.04 30.92H45.71c2.61-10.62 6.03-20.9 10.04-30.92h400.5zm15.68 68.08c.3 4.68.47 9.37.47 14.07 0 5.67-.22 11.3-.65 16.85H40.25c-.42-5.59-.65-11.26-.65-16.85 0-4.73.17-9.42.47-14.07h431.86zm-6.32 68.06a212.979 212.979 0 0 1-10.52 30.94H56.91c-4.25-10.02-7.83-20.39-10.52-30.94h419.22zm-30.9 68.06c-7.63 11.14-16.25 21.56-25.78 31.07H103.07c-9.5-9.51-18.15-19.93-25.78-31.07h357.42zm-75.27 68.08c-30.86 16.77-66.16 26.29-103.44 26.29-37.47 0-72.72-9.53-103.44-26.29h206.88z"/><path fill="#3C3B6E" d="M268.16 39.94v234.41H40.39c-.53-6.07-.79-12.16-.79-18.36 0-119.51 96.88-216.4 216.4-216.4 4.08 0 8.14.13 12.16.35z"/><path fill="#fff" d="m50.81 187.06.98 3.06-1.6-1.18.62-1.88zm189.29 49.91 8.01 24.66-20.96-15.25h25.89l-20.97 15.25 8.03-24.66zm0-47.66 8.01 24.62-20.96-15.22h25.89l-20.97 15.22 8.03-24.62zm0-47.69 8.01 24.65-20.96-15.26h25.89l-20.97 15.26 8.03-24.65zm0-47.66 8.01 24.62-20.96-15.23h25.89l-20.97 15.23 8.03-24.62zm0-47.67 8.01 24.63-20.96-15.24h25.89l-20.97 15.24 8.03-24.63zm-28.08 166.85 8.03 24.64-20.98-15.25h25.89l-20.86 15.25 7.92-24.64zm0-47.67 8.03 24.65-20.98-15.26h25.89l-20.86 15.26 7.92-24.65zm0-47.66 8.03 24.62-20.98-15.23h25.89l-20.86 15.23 7.92-24.62zm0-47.7 8.03 24.65-20.98-15.25h25.89L204.1 94.76l7.92-24.65zm-27.97 166.86 8.03 24.66-20.98-15.25h25.91l-20.97 15.25 8.01-24.66zm0-47.66 8.03 24.62-20.98-15.22h25.91l-20.97 15.22 8.01-24.62zm0-47.69 8.03 24.65-20.98-15.26h25.91l-20.97 15.26 8.01-24.65zm0-47.66 8.03 24.62-20.98-15.23h25.91l-20.97 15.23 8.01-24.62zm1.64-42.68 6.39 19.64-19.93-14.48 1.86-.76h23l-20.97 15.24 5.97-18.34 3.68-1.3zm-29.71 161.86 8.01 24.64-20.97-15.25h25.91l-20.98 15.25 8.03-24.64zm0-47.67 8.01 24.65-20.97-15.26h25.91l-20.98 15.26 8.03-24.65zm0-47.66 8.01 24.62-20.97-15.23h25.91l-20.98 15.23 8.03-24.62zm0-47.7 8.01 24.65-20.97-15.25h25.91l-20.98 15.25 8.03-24.65zm-27.97 166.86 7.92 24.66-20.86-15.25h25.89l-20.98 15.25 8.03-24.66zm0-47.66 7.92 24.62-20.86-15.22h25.89l-20.98 15.22 8.03-24.62zm0-47.69 7.92 24.65-20.86-15.26h25.89l-20.98 15.26 8.03-24.65zm0-47.66 7.92 24.62-20.86-15.23h25.89l-20.98 15.23 8.03-24.62zM99.93 213.14l8.03 24.64-20.97-15.25h25.9l-20.97 15.25 8.01-24.64zm0-47.67 8.03 24.65-20.97-15.26h25.9l-20.97 15.26 8.01-24.65zm0-47.66 8.03 24.62-20.97-15.23h25.9l-20.97 15.23 8.01-24.62zM71.87 236.97l8.01 24.66-20.98-15.25h26.02l-21.08 15.25 8.03-24.66zm0-47.66 8.01 24.62-20.98-15.22h26.02l-21.08 15.22 8.03-24.62zm.14-47.26 7.87 24.22-15.36-11.17 2.2-4.09h18.2l-21.08 15.26 7.6-23.32.57-.9zM43.9 213.14l7.89 24.64-10.63-7.77-.47 4.27 16.15-11.75H42.16c.48-3.02 1.02-6.02 1.62-8.99l.12-.4zm11.44-38.28h1.5l-2.14 1.57.64-1.57z"/></g></svg>`;
            
        $('._HeaderLangSwitch_95g91_8').html(iconSvg);
    }

    function toggleLanguage() {
        currentLang = currentLang === 'ru' ? 'en' : 'ru';
        localStorage.setItem('preferred_language', currentLang);
        // if (currentLang === 'ru') {
        //     // Reload page to restore Russian content
            
        //     return;
        // }
        window.location.reload();
        //translatePage();
        //updateLangIcon();
        
    }

    function translateText(text) {
        if (currentLang === 'ru') return text;
        return translations.en[text] || text;
    }

    function translatePage() {
        if (currentLang === 'ru') return;

        // Translate all text nodes
        $('body').find('*').contents().each(function() {
            if (this.nodeType === 3) { // Text node
                const text = $(this).text().trim();
                if (text && translations.en[text]) {
                    $(this).replaceWith(translations.en[text]);
                }
            }
        });

        // Translate placeholders
        $('input[placeholder]').each(function() {
            const placeholder = $(this).attr('placeholder');
            if (translations.en[placeholder]) {
                $(this).attr('placeholder', translations.en[placeholder]);
            }
        });

        // Translate all buttons
        $('button').each(function() {
            const text = $(this).text().trim();
            if (translations.en[text]) {
                $(this).text(translations.en[text]);
            }
        });

        // Translate reviews section
        $('.h2 .blue').each(function() {
            const text = $(this).parent().text();
            const number = text.match(/\d+/)[0];
            $(this).parent().html(translations.en["Более"] + ' <span class="blue">' + number + '</span> ' + translations.en["отзывов"]);
        });

        // Translate currency codes
        $('._currency_be7kg_19').each(function() {
            const code = $(this).text().toLowerCase();
            if (translations.en[code]) {
                $(this).text(translations.en[code]);
            }
        });

        // Update rate display text
        if ($('._course_zee5j_31').length) {
            const rateText = $('._course_zee5j_31').text();
            const [amount, currency] = rateText.split('=').map(s => s.trim());
            const [number, code] = amount.split(' ');
            const translatedCode = translations.en[code.toLowerCase()] || code;
            const translatedCurrency = currency.split(' ').map(part => translations.en[part.toLowerCase()] || part).join(' ');
            $('._course_zee5j_31').text(`${number} ${translatedCode} = ${translatedCurrency}`);
        }
    }

    // Check for stored language preference
    const storedLang = localStorage.getItem('preferred_language') || navigator.language.slice(0, 2) || 'en';
    if (storedLang && storedLang !== currentLang) {
        currentLang = storedLang;
        translatePage();
        updateLangIcon();
    }

    // Initial icon update
    updateLangIcon();

    // Handle dynamic content translation
    const originalOpenCurrencyModal = window.openCurrencyModal;
    if (originalOpenCurrencyModal) {
        window.openCurrencyModal = function() {
            originalOpenCurrencyModal();
            if (currentLang === 'en') {
                setTimeout(translatePage, 100);
            }
        };
    }

    // Translate after loading AML/KYC page
    // const originalLoadAmlKyc = window.loadAmlKyc;
    // if (originalLoadAmlKyc) {
    //     window.loadAmlKyc = function() {
    //         originalLoadAmlKyc();
    //         if (currentLang === 'en') {
    //             setTimeout(translatePage, 100);
    //         }
    //     };
    // }

    // Handle currency switch overlay translations
    $(document).on('DOMNodeInserted', function(e) {
        if ($(e.target).hasClass('_overlay_gn96g_8') && currentLang === 'en') {
            setTimeout(translatePage, 100);
        }
    });
});