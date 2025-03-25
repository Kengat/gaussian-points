// Initialize market statistics charts
function initializeMarketCharts() {
    // Settings for dark and light modes
    const isDarkMode = document.body.classList.contains('dark-theme');
    const gridColor = isDarkMode ? 'rgba(100, 100, 100, 0.2)' : 'rgba(200, 200, 200, 0.1)';
    const textColor = isDarkMode ? '#aaa' : '#666';
    
    // Clear existing charts if they exist
    if (window.geoChart) window.geoChart.destroy();
    if (window.professionChart) window.professionChart.destroy();
    
    // Enhanced chart interactions
    const chartInteractions = {
      onHover: (event, chartElements) => {
        const chart = event.chart;
        if (chartElements.length) {
          // Expand hovered segment
          const index = chartElements[0].index;
          const dataset = chart.data.datasets[0];
          
          if (!dataset._originalBackgroundColor) {
            dataset._originalBackgroundColor = [...dataset.backgroundColor];
          }
          
          // Reset to original colors
          dataset.backgroundColor = [...dataset._originalBackgroundColor];
          
          // Highlight hovered segment
          const highlightColor = dataset.backgroundColor[index].replace('0.8', '1');
          dataset.backgroundColor[index] = highlightColor;
          
          chart.update();
        }
      }
    };

    // Get current language for labels
    const currentLang = localStorage.getItem('preferred-language') || 'en';
    const geoLabels = translations[currentLang].geo_chart_labels || 
                    ['United States', 'UK', 'Europe (other)', 'Asia', 'Rest of World'];
    const professionLabels = translations[currentLang].profession_chart_labels || 
                    ['Architects', 'Interior Designers', 'Urban Planners', 'Engineers', 'Others'];
    
    // Geographic distribution chart
    window.geoChart = new Chart(document.getElementById('geo-chart'), {
      type: 'doughnut', // Changed from pie to doughnut for more elegant look
      data: {
        labels: geoLabels,
        datasets: [{
          data: [52, 8, 20, 12, 8],
          backgroundColor: [
            'rgba(52, 152, 219, 0.8)',
            'rgba(155, 89, 182, 0.8)',
            'rgba(46, 204, 113, 0.8)',
            'rgba(230, 126, 34, 0.8)',
            'rgba(241, 196, 15, 0.8)'
          ],
          borderColor: isDarkMode ? 
            Array(5).fill('rgba(30, 30, 30, 0.8)') : 
            Array(5).fill('rgba(255, 255, 255, 0.8)'),
          borderWidth: 2,
          hoverOffset: 15
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              color: textColor,
              padding: 15,
              usePointStyle: true,
              pointStyle: 'circle',
              font: {
                size: 11
              }
            }
          },
          tooltip: {
            backgroundColor: isDarkMode ? 'rgba(30, 30, 30, 0.9)' : 'rgba(255, 255, 255, 0.9)',
            titleColor: isDarkMode ? '#eee' : '#333',
            bodyColor: isDarkMode ? '#aaa' : '#666',
            borderColor: 'rgba(52, 152, 219, 0.3)',
            borderWidth: 1,
            padding: 12,
            cornerRadius: 8,
            callbacks: {
              label: function(context) {
                const label = context.label || '';
                const value = context.raw || 0;
                return `${label}: ${value}%`;
              }
            }
          }
        },
        cutout: '50%',
        animation: {
          animateRotate: true,
          animateScale: true,
          duration: 2000
        },
        onHover: chartInteractions.onHover
      }
    });
    
    // Add hover effect to chart container
    const geoChartContainer = document.getElementById('geo-chart').parentNode.parentNode;
    geoChartContainer.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = isDarkMode ? 
        '0 12px 30px rgba(0, 0, 0, 0.25)' : 
        '0 12px 30px rgba(0, 0, 0, 0.12)';
    });
    
    geoChartContainer.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = isDarkMode ? 
        '0 8px 20px rgba(0, 0, 0, 0.2)' : 
        '0 8px 20px rgba(0, 0, 0, 0.1)';
    });
    
    // Profession breakdown chart with improved visuals
    window.professionChart = new Chart(document.getElementById('profession-chart'), {
      type: 'bar',
      data: {
        labels: professionLabels,
        datasets: [{
          label: 'Percentage',
          data: [55, 12, 10, 10, 13],
          backgroundColor: function(context) {
            const chart = context.chart;
            const {ctx, chartArea} = chart;
            
            if (!chartArea) {
              return isDarkMode ? 'rgba(155, 89, 182, 0.8)' : 'rgba(155, 89, 182, 0.7)';
            }
            
            // Create gradient
            const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
            gradient.addColorStop(0, isDarkMode ? 'rgba(52, 152, 219, 0.7)' : 'rgba(52, 152, 219, 0.6)');
            gradient.addColorStop(1, isDarkMode ? 'rgba(155, 89, 182, 0.7)' : 'rgba(155, 89, 182, 0.6)');
            
            return gradient;
          },
          borderRadius: 6,
          borderWidth: 0,
          hoverBackgroundColor: isDarkMode ? 'rgba(155, 89, 182, 1)' : 'rgba(155, 89, 182, 0.9)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: isDarkMode ? 'rgba(30, 30, 30, 0.9)' : 'rgba(255, 255, 255, 0.9)',
            titleColor: isDarkMode ? '#eee' : '#333',
            bodyColor: isDarkMode ? '#aaa' : '#666',
            borderColor: 'rgba(155, 89, 182, 0.3)',
            borderWidth: 1,
            padding: 12,
            cornerRadius: 8,
            displayColors: false,
            callbacks: {
              label: function(context) {
                return `${context.parsed.y}% of SketchUp users`;
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: textColor
            }
          },
          y: {
            grid: {
              color: gridColor
            },
            ticks: {
              color: textColor,
              callback: function(value) {
                return value + '%';
              }
            }
          }
        },
        animation: {
          duration: 2000,
          easing: 'easeOutQuart'
        }
      }
    });
    
    // Add hover effect to chart container
    const professionChartContainer = document.getElementById('profession-chart').parentNode.parentNode;
    professionChartContainer.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = isDarkMode ? 
        '0 12px 30px rgba(0, 0, 0, 0.25)' : 
        '0 12px 30px rgba(0, 0, 0, 0.12)';
    });
    
    professionChartContainer.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = isDarkMode ? 
        '0 8px 20px rgba(0, 0, 0, 0.2)' : 
        '0 8px 20px rgba(0, 0, 0, 0.1)';
    });

    // Fix Market Opportunity slide layout
    const slide4 = document.getElementById('slide-4');
    if (slide4) {
      const flexContainer = slide4.querySelector('[style*="display: flex"]');
      if (flexContainer) {
        flexContainer.style.display = "flex";
        flexContainer.style.flexDirection = "row";
        flexContainer.style.gap = "30px";
        flexContainer.style.alignItems = "stretch";
        
        const chartDivs = flexContainer.querySelectorAll('[style*="flex: 1"]');
        chartDivs.forEach(div => {
          div.style.flex = "1";
          div.style.width = "50%";
          div.style.minWidth = "45%";
        });
      }
    }
    
    // Add data-lang attributes to chart titles
    document.getElementById('geo-chart').parentNode.parentNode.querySelector('.chart-title').setAttribute('data-lang', 'users_by_geography');
    document.getElementById('profession-chart').parentNode.parentNode.querySelector('.chart-title').setAttribute('data-lang', 'users_by_profession');
  }
  
// Initialize competitor performance chart
function initializeCompetitorChart() {
    // Settings for dark and light modes
    const isDarkMode = document.body.classList.contains('dark-theme');
    const gridColor = isDarkMode ? 'rgba(100, 100, 100, 0.2)' : 'rgba(200, 200, 200, 0.1)';
    const textColor = isDarkMode ? '#aaa' : '#666';
    
    // Clear existing chart if it exists
    if (window.performanceChart) window.performanceChart.destroy();
    
    // Get current language for labels
    const currentLang = localStorage.getItem('preferred-language') || 'en';
    const performanceLabels = translations[currentLang].performance_chart_labels || 
                   ['Gaussian Points', 'Scan Essentials', 'Undet'];
    
    // Performance comparison chart with enhanced visuals
    window.performanceChart = new Chart(document.getElementById('performance-chart'), {
      type: 'bar',
      data: {
        labels: performanceLabels,
        datasets: [{
          label: 'FPS rendering 100M points',
          data: [60, 15, 18],
          backgroundColor: function(context) {
            const chart = context.chart;
            const {ctx, chartArea} = chart;
            
            if (!chartArea) {
              return context.dataIndex === 0 ? 
                'rgba(52, 152, 219, 0.8)' : 
                'rgba(189, 195, 199, 0.8)';
            }
            
            // Create gradient for first bar
            if (context.dataIndex === 0) {
              const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
              gradient.addColorStop(0, isDarkMode ? 'rgba(52, 152, 219, 0.7)' : 'rgba(52, 152, 219, 0.6)');
              gradient.addColorStop(1, isDarkMode ? 'rgba(155, 89, 182, 0.7)' : 'rgba(155, 89, 182, 0.6)');
              return gradient;
            } else {
              return 'rgba(189, 195, 199, 0.8)';
            }
          },
          borderRadius: 6,
          borderWidth: 0,
          hoverBackgroundColor: context => {
            return context.dataIndex === 0 ? 
              'rgba(52, 152, 219, 1)' : 
              'rgba(189, 195, 199, 1)';
          }
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return `${context.parsed.y} FPS`;
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: textColor
            }
          },
          y: {
            grid: {
              color: gridColor
            },
            ticks: {
              color: textColor
            }
          }
        },
        animation: {
          duration: 2000,
          easing: 'easeOutQuart'
        }
      }
    });
  
    // Function to adjust sizes
    function adjustChartHeight() {
      const slide7 = document.getElementById('slide-7');
      if (slide7) {
        const tableContainer = slide7.querySelector('[style*="flex: 1.2"]');
        const chartContainer = slide7.querySelector('[style*="flex: 1"]');
        
        if (tableContainer && chartContainer) {
          // Get table and its dimensions
          const comparisonTable = tableContainer.querySelector('.comparison-table');
          const chartBox = chartContainer.querySelector('.chart');
          
          if (comparisonTable && chartBox) {
            // Measure table height
            const tableHeight = comparisonTable.offsetHeight;
            
            // Set chart container height equal to table height
            chartBox.style.height = tableHeight + 'px';
            
            // Adjust canvas container height
            const chartTitle = chartBox.querySelector('.chart-title');
            const titleHeight = chartTitle ? chartTitle.offsetHeight + 10 : 30; // 10px - approximate padding
            
            const chartCanvas = chartBox.querySelector('.chart-canvas-container');
            if (chartCanvas) {
              chartCanvas.style.height = (tableHeight - titleHeight) + 'px';
              
              // Update chart after size changes
              if (window.performanceChart) {
                window.performanceChart.resize();
              }
            }
          }
        }
      }
    }
  
    // Run adjustment with delay and retry
    setTimeout(adjustChartHeight, 100);
    setTimeout(adjustChartHeight, 500);
    setTimeout(adjustChartHeight, 1000);
    
    // Add scroll event handler to recalculate sizes
    document.querySelector('.slides-container').addEventListener('scroll', function() {
      if (currentSlide === 7) {
        setTimeout(adjustChartHeight, 100);
      }
    });
    
    // Add data-lang attribute to chart title
    document.getElementById('performance-chart').parentNode.parentNode.querySelector('.chart-title').setAttribute('data-lang', 'performance_comparison');
  }
  
  // Initialize revenue projection chart
  function initializeRevenueProjection() {
    // Settings for dark and light modes
    const isDarkMode = document.body.classList.contains('dark-theme');
    const gridColor = isDarkMode ? 'rgba(100, 100, 100, 0.2)' : 'rgba(200, 200, 200, 0.1)';
    const textColor = isDarkMode ? '#aaa' : '#666';
    
    // Clear existing chart if it exists
    if (window.revenueChart) window.revenueChart.destroy();
    
    // Get current language for labels
    const currentLang = localStorage.getItem('preferred-language') || 'en';
    const revenueLabels = translations[currentLang].revenue_chart_labels || 
                 ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'];
    
    // Revenue projection chart with enhanced visuals
    window.revenueChart = new Chart(document.getElementById('revenue-chart'), {
      type: 'line',
      data: {
        labels: revenueLabels,
        datasets: [{
          label: 'Projected Revenue ($M)',
          data: [0.5, 1.5, 2.5, 3.8, 5.2],
          backgroundColor: function(context) {
            const chart = context.chart;
            const {ctx, chartArea} = chart;
            
            if (!chartArea) {
              return 'rgba(52, 152, 219, 0.1)';
            }
            
            // Create gradient
            const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
            gradient.addColorStop(0, 'rgba(52, 152, 219, 0.1)');
            gradient.addColorStop(1, 'rgba(155, 89, 182, 0.1)');
            
            return gradient;
          },
          borderColor: 'rgba(52, 152, 219, 0.8)',
          borderWidth: 3,
          tension: 0.4,
          fill: true,
          pointBackgroundColor: isDarkMode ? '#222' : '#fff',
          pointBorderColor: 'rgba(52, 152, 219, 0.8)',
          pointBorderWidth: 2,
          pointRadius: 5,
          pointHoverRadius: 8,
          pointHoverBorderWidth: 3,
          pointHoverBackgroundColor: 'rgba(52, 152, 219, 1)',
          pointHoverBorderColor: '#fff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: isDarkMode ? 'rgba(30, 30, 30, 0.9)' : 'rgba(255, 255, 255, 0.9)',
            titleColor: isDarkMode ? '#eee' : '#333',
            bodyColor: isDarkMode ? '#aaa' : '#666',
            borderColor: 'rgba(52, 152, 219, 0.3)',
            borderWidth: 1,
            padding: 12,
            cornerRadius: 8,
            displayColors: false,
            callbacks: {
              label: function(context) {
                return `Revenue: $${context.raw}M`;
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: textColor
            }
          },
          y: {
            grid: {
              color: gridColor
            },
            ticks: {
              color: textColor,
              callback: function(value) {
                return '$' + value + 'M';
              }
            }
          }
        },
        animation: {
          duration: 2000,
          easing: 'easeOutQuart'
        },
        elements: {
          line: {
            tension: 0.4
          }
        }
      }
    });
    
    // Add hover effect to chart container
    const chartContainer = document.getElementById('revenue-chart').parentNode.parentNode;
    chartContainer.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = isDarkMode ? 
        '0 12px 30px rgba(0, 0, 0, 0.25)' : 
        '0 12px 30px rgba(0, 0, 0, 0.12)';
    });
    
    chartContainer.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = isDarkMode ? 
        '0 8px 20px rgba(0, 0, 0, 0.2)' : 
        '0 8px 20px rgba(0, 0, 0, 0.1)';
    });
    
    // Add data-lang attribute to chart title
    document.getElementById('revenue-chart').parentNode.parentNode.querySelector('.chart-title').setAttribute('data-lang', 'projected_revenue');
  }