var pineappleData = []
var series2

am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv3");
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/sliced-chart/
    var chart = root.container.children.push(am5percent.SlicedChart.new(root, {
      layout: root.verticalLayout
    }));
    
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/sliced-chart/#Series
    series2 = chart.series.push(am5percent.PictorialStackedSeries.new(root, {
      alignLabels: true,
      orientation: "vertical",
      valueField: "value",
      categoryField: "category",
      svgPath: 'M 378.584 1.058 C 299.499 4.933, 192.824 16.879, 169.726 24.448 C 153.149 29.880, 139.181 38.822, 126.735 51.970 C 110.388 69.238, 103.101 85.948, 100.555 112 C 98.644 131.563, 93 201.976, 84.004 318.500 C 75.847 424.147, 75.579 427.077, 73.825 429.979 C 73.096 431.184, 67.775 435.825, 62 440.291 C 49.492 449.963, 34.490 464.893, 26.127 475.991 C 14.500 491.422, 8.138 504.483, 3.270 522.915 C -0.203 536.062, -1.029 560.168, 1.479 575.165 C 5.033 596.422, 13.688 616.090, 24.743 628.036 C 31.877 635.745, 37.621 639.699, 47.250 643.528 C 53.861 646.157, 54 646.288, 53.991 649.856 C 53.980 654.438, 51.662 674.272, 48.483 697 C 38.445 768.764, 35.176 819.655, 39.362 839 C 44.598 863.196, 62.841 879.499, 93.147 887.067 C 103.856 889.741, 127.308 890.760, 139.133 889.065 C 176.262 883.742, 201.630 866.983, 210.211 842.109 C 212.060 836.748, 212.471 833.517, 212.387 825 C 212.299 816.027, 211.809 813.046, 209.020 804.500 C 206.021 795.310, 200.363 783.042, 194.848 773.769 C 193.627 771.717, 192.871 769.796, 193.167 769.500 C 193.747 768.920, 274.035 736.225, 391.984 688.538 L 465.468 658.828 474.181 661.501 C 490.740 666.581, 503.831 666.961, 521 662.860 C 544.145 657.333, 559.263 645.126, 571.212 622.316 L 575.500 614.132 640 588.122 C 817.832 516.412, 891.422 486.315, 902.440 480.788 C 940.206 461.844, 969.442 424.112, 977.577 383.814 C 979.820 372.706, 980.711 333.687, 979.028 320.313 C 976.843 302.955, 968.108 271.140, 957.528 242 C 946.744 212.303, 939.356 197.321, 924.488 175 C 912.175 156.516, 904.473 147.268, 886.597 129.500 C 847.822 90.959, 797.893 61.398, 735.564 40.078 C 675.150 19.413, 614.227 8.317, 526 1.912 C 507.088 0.539, 401.646 -0.072, 378.584 1.058 M 430 33.055 C 415.425 33.432, 400.012 33.798, 395.750 33.870 L 388 34 388 48.608 L 388 63.217 390.588 62.567 C 394.033 61.703, 435.600 60.055, 454.750 60.025 L 470 60 470 46 L 470 32 463.250 32.185 C 459.538 32.287, 444.575 32.679, 430 33.055 M 506 47.734 L 506 61.742 516.250 62.449 C 521.888 62.838, 540.430 64.457, 557.456 66.047 C 585.130 68.631, 588.588 68.777, 590.081 67.427 C 591.847 65.828, 597.652 51.988, 598.651 46.996 C 599.161 44.445, 598.866 43.900, 596.491 42.997 C 591.199 40.984, 553.448 36.961, 515.750 34.391 L 506 33.726 506 47.734 M 342 36.684 C 340.075 36.885, 326.575 38.184, 312 39.572 C 297.425 40.960, 278.221 42.974, 269.325 44.047 C 260.428 45.121, 252.822 46, 252.421 46 C 251.152 46, 252.894 70.331, 254.253 71.587 C 255.197 72.458, 261.097 72.182, 278.500 70.450 C 291.150 69.191, 312.863 67.144, 326.750 65.901 L 352 63.640 352 49.820 L 352 36 348.750 36.160 C 346.962 36.248, 343.925 36.484, 342 36.684 M 635.596 51.250 C 633.951 53.803, 626.530 74.908, 627.117 75.365 C 627.328 75.529, 637.850 78.196, 650.500 81.292 C 663.150 84.388, 680.925 89.252, 690 92.102 C 699.075 94.951, 707.368 97.331, 708.428 97.391 C 710.029 97.481, 711.134 95.258, 714.928 84.305 C 718.297 74.583, 719.206 70.815, 718.383 69.989 C 716.003 67.597, 645.579 49, 638.904 49 C 637.882 49, 636.394 50.013, 635.596 51.250 M 211 51.678 C 192.703 53.549, 173.751 57.949, 165.846 62.163 C 156.338 67.231, 142 81.484, 142 85.868 C 142 87.476, 146.621 87.287, 165.188 84.921 C 181.933 82.788, 215.923 77.411, 216.535 76.799 C 216.723 76.610, 217.175 71.966, 217.538 66.478 C 218.168 56.980, 217.248 50.753, 215.275 51.160 C 214.849 51.248, 212.925 51.481, 211 51.678 M 753.143 84.750 C 751.767 87.346, 742.854 112.198, 743.201 112.469 C 743.366 112.597, 746.875 114.313, 751 116.282 C 765.648 123.276, 788.802 137.729, 810.496 153.419 L 818.493 159.203 821.996 155.204 C 825.947 150.694, 835.896 135.115, 836.639 132.274 C 837.255 129.919, 827.729 122.972, 806 109.928 C 793.116 102.194, 756.487 83, 754.612 83 C 754.314 83, 753.653 83.787, 753.143 84.750 M 398.500 95.610 C 395.200 95.795, 383.950 96.430, 373.500 97.020 C 319.823 100.050, 262.944 105.944, 195 115.517 C 161.497 120.237, 137.504 124.071, 136.124 124.923 C 135.459 125.335, 134.351 131.933, 133.497 140.567 C 130.044 175.501, 112.156 393.791, 109.793 429.832 L 108.569 448.500 105.535 451.335 C 103.866 452.894, 96.875 458.067, 90 462.831 C 60.383 483.355, 42.252 507.102, 35.871 533.726 C 31.786 550.772, 35.429 579.540, 43.926 597.345 C 47.664 605.176, 49.990 607.243, 62.119 613.507 C 72.754 619, 79.875 625.520, 84.500 634 C 87.437 639.385, 87.499 639.794, 87.455 653.500 C 87.419 664.451, 86.383 675.014, 82.695 702 C 74.063 765.181, 71.508 792.536, 72.207 814.314 C 72.586 826.131, 73.034 829.351, 74.889 833.599 C 77.834 840.340, 83.869 846.038, 92.761 850.472 C 102.885 855.520, 112.660 856.748, 130.509 855.216 C 151.334 853.429, 164.121 848.349, 172.899 838.377 C 182.394 827.590, 180.128 816.150, 163.117 789 C 153.864 774.230, 144.680 755.548, 141.979 746 C 138.968 735.356, 138.266 719.398, 140.388 709.860 C 144.723 690.372, 158.604 673.262, 177.992 663.507 C 187.342 658.803, 240.714 636.143, 341 594.299 C 389.125 574.220, 436.991 554.210, 447.369 549.834 C 457.746 545.458, 466.901 542.132, 467.712 542.443 C 468.849 542.879, 469.049 544.095, 468.587 547.754 C 466.123 567.273, 465.364 593.306, 467.002 602.114 C 468.394 609.604, 473.642 619.538, 478.323 623.544 C 483.538 628.008, 490.110 629.293, 505.386 628.835 C 516.547 628.501, 517.917 628.243, 522.804 625.548 C 532.384 620.265, 538.881 610.768, 541.560 598.131 C 543.611 588.455, 543.337 569.760, 540.920 554.500 C 538.439 538.830, 538.225 526.844, 540.263 517.694 C 541.097 513.950, 541.942 510.771, 542.140 510.629 C 542.338 510.487, 569.500 499.208, 602.500 485.566 C 774.595 414.418, 851.697 381.969, 862 376.352 C 881.980 365.459, 894.784 350.132, 895.816 335.870 C 896.376 328.124, 893.641 319.659, 884.885 302.042 C 864.386 260.796, 835.745 221.308, 808.500 196.729 C 786.149 176.566, 765.516 162.794, 735.500 148.005 C 688.158 124.680, 635.081 110.060, 567 101.592 C 527.065 96.625, 511.841 95.788, 456.500 95.522 C 427.900 95.385, 401.800 95.424, 398.500 95.610 M 430.491 120.865 C 425.462 123.150, 420.047 129.215, 419.849 132.785 C 419.413 140.646, 420.864 144.639, 425.898 149.424 C 428.650 152.041, 429.895 152.422, 437.737 153.041 C 442.557 153.422, 447.265 154.058, 448.199 154.454 C 449.134 154.851, 452.151 159.776, 454.905 165.400 C 458.722 173.198, 461.224 176.867, 465.440 180.855 C 475.581 190.446, 489.730 195.288, 506.183 194.797 C 510.213 194.677, 514.079 194.931, 514.776 195.361 C 515.472 195.792, 518.252 200.760, 520.953 206.401 C 524.918 214.684, 526.992 217.701, 531.728 222.079 C 543.276 232.752, 561.264 238.275, 573.453 234.891 C 584.402 231.851, 589.145 218.520, 582.712 208.862 C 579.511 204.055, 574.918 202.199, 564.250 201.403 L 555 200.713 553.908 196.607 C 550.885 185.232, 539.841 171.382, 529.267 165.704 C 522.177 161.897, 512.557 160.038, 499.832 160.017 L 489.163 160 487.047 153.641 C 484.376 145.616, 480.554 139.570, 474.362 133.582 C 461.825 121.455, 441.904 115.680, 430.491 120.865 M 312.093 137.089 C 303.294 138.144, 281.661 143.688, 267 148.646 C 221.174 164.142, 184.054 187.059, 170.679 208.113 C 164.583 217.711, 162.651 224.864, 162.743 237.500 C 162.967 268.032, 175.533 286.682, 201.413 294.894 C 219.413 300.605, 227.475 301.503, 260.500 301.473 C 295.205 301.443, 303.130 300.580, 320.210 294.971 C 356.527 283.046, 386.016 258.132, 398.061 229.198 C 400.549 223.222, 401.391 219.267, 402.284 209.368 C 404.864 180.774, 398.750 161.504, 383.500 150.168 C 376.037 144.620, 365.229 139.537, 358 138.175 C 350.274 136.719, 320.961 136.026, 312.093 137.089 M 862.218 160.750 C 857.407 166.866, 846 183.308, 846 184.126 C 846 184.543, 849.782 189.201, 854.404 194.478 C 859.027 199.754, 868.364 211.236, 875.154 219.992 C 881.944 228.749, 887.999 235.933, 888.609 235.957 C 890.069 236.014, 906.233 221.819, 908.300 218.665 C 909.859 216.286, 909.733 215.926, 904.249 207.118 C 892.728 188.614, 868.535 157, 865.895 157 C 865.495 157, 863.841 158.688, 862.218 160.750 M 316 171.035 C 281.847 175.218, 227.151 197.128, 208.650 214.037 C 205.011 217.363, 201.939 221.409, 199.884 225.585 C 196.888 231.670, 196.747 232.466, 197.248 240.496 C 198.149 254.931, 203.953 262.714, 215.500 264.968 C 226.220 267.061, 261.274 268.234, 280.674 267.149 C 301.464 265.986, 310.140 264.239, 323.227 258.581 C 335.680 253.197, 341.857 249.103, 350.506 240.500 C 363.830 227.247, 369.821 212.749, 368.628 196.640 C 367.617 182.994, 363.087 176.060, 352.816 172.435 C 347.487 170.554, 326.456 169.755, 316 171.035 M 275.530 187.282 C 269.591 190.645, 267 195.116, 267 202 C 267 215.358, 279.077 222.730, 291 216.648 C 299.476 212.325, 302.173 204.304, 298.110 195.500 C 293.651 185.838, 284.170 182.388, 275.530 187.282 M 329.024 204.185 C 327.112 205.484, 324.485 208.112, 323.186 210.024 C 321.202 212.945, 320.884 214.465, 321.197 219.543 C 321.659 227.056, 324.533 231.464, 330.771 234.223 C 341.756 239.082, 354.014 231.089, 354.181 218.958 C 354.346 207.035, 338.510 197.736, 329.024 204.185 M 691.589 220.029 C 658.359 223.829, 605.820 243.411, 576 263.111 C 570.430 266.790, 562.317 273.547, 556.388 279.443 C 548.131 287.655, 545.563 290.959, 542.388 297.450 L 538.500 305.399 538.569 319.950 C 538.674 342.117, 542.710 354.615, 553.129 365.034 C 559.176 371.081, 564.818 374.310, 575.658 377.927 C 591.518 383.221, 603.596 384.461, 639.500 384.481 C 679.991 384.505, 687.218 383.200, 711.929 371.402 C 747.419 354.459, 771.697 327.459, 776.476 299.619 C 778.228 289.412, 778.442 274.432, 776.971 265 C 774.680 250.305, 762.138 233.032, 749.318 226.913 C 736.825 220.951, 710.737 217.840, 691.589 220.029 M 232.001 226.123 C 220.553 230.688, 218.623 245.194, 228.330 253.716 C 239.141 263.209, 255.889 255.450, 255.978 240.907 C 256.009 235.863, 252.160 229.091, 247.991 226.855 C 244.211 224.828, 236.171 224.460, 232.001 226.123 M 687 254.666 C 660.914 258.775, 615.752 275.598, 593.383 289.540 C 589.432 292.003, 583.722 296.693, 580.695 299.963 C 573.532 307.700, 571.598 313.260, 572.208 324.367 C 572.888 336.740, 576.570 342.618, 586.512 347.201 C 591.475 349.488, 591.714 349.500, 634 349.444 C 682.419 349.381, 683.252 349.271, 701.706 340.530 C 719.736 331.988, 730.892 321.920, 737.976 307.794 C 742.806 298.162, 744.349 290.880, 743.796 280.336 C 743.449 273.714, 742.780 270.951, 740.400 266.298 C 736.856 259.367, 732.612 256.629, 722.998 255.069 C 716.885 254.078, 692.473 253.804, 687 254.666 M 916.276 259.838 C 905.757 268.901, 906.045 267.126, 912.878 280.757 C 921.807 298.568, 926.913 311.088, 929.424 321.324 C 930.662 326.371, 932.040 330.500, 932.487 330.500 C 936.257 330.500, 938.223 304.927, 935.562 290.500 C 932.336 273.010, 926.545 254, 924.444 254 C 923.678 254, 920.002 256.627, 916.276 259.838 M 694.459 261.880 C 681.223 267.892, 680.581 285.078, 693.346 291.679 C 697.904 294.036, 706.032 293.762, 710.330 291.105 C 714.318 288.640, 718 281.989, 718 277.249 C 718 268.399, 709.805 259.955, 701.282 260.022 C 699.752 260.034, 696.681 260.870, 694.459 261.880 M 466.015 290.695 C 464.099 291.688, 460.104 295.538, 457.139 299.250 C 454.026 303.147, 450.976 306, 449.922 306 C 448.919 306, 445.506 305.325, 442.339 304.500 C 433.492 302.196, 420.833 302.572, 412.893 305.374 C 402.025 309.211, 394.584 315.442, 384.691 328.992 C 380.391 334.881, 377.659 335.786, 369.737 333.947 C 360.720 331.855, 348.742 332.178, 341.867 334.700 C 330.390 338.910, 318.726 348.843, 314.777 357.770 C 312.016 364.014, 312.620 372.879, 316.063 376.622 C 319.816 380.702, 326.385 383.280, 331.030 382.495 C 336.267 381.610, 342.286 377.069, 346.243 371.017 C 349.932 365.375, 350.067 365.343, 361.338 367.500 C 385.332 372.092, 401.189 365.351, 416.537 344.035 C 419.669 339.684, 422.828 335.896, 423.557 335.616 C 424.286 335.337, 427.945 335.983, 431.688 337.054 C 448.833 341.957, 467.549 337.116, 480.418 324.451 C 492.395 312.664, 493.348 299.497, 482.791 291.678 C 478.973 288.849, 470.532 288.355, 466.015 290.695 M 670.024 305.186 C 659.416 312.392, 659.487 325.270, 670.177 333.013 C 683.746 342.843, 701.605 327.010, 693.814 312.059 C 690.526 305.748, 687.221 303.670, 679.739 303.209 C 674.447 302.883, 672.972 303.183, 670.024 305.186 M 606.422 305.364 C 601.857 307.433, 597.174 313.655, 596.425 318.649 C 594.516 331.382, 609.650 342.056, 621.583 336.394 C 628.668 333.032, 631.786 322.826, 628.203 314.727 C 624.634 306.658, 613.824 302.011, 606.422 305.364 M 936.873 378.788 C 925.608 388.702, 917.031 392.665, 818.500 433.492 C 722.633 473.215, 573.498 535.222, 573.219 535.475 C 573.064 535.615, 573.821 541.528, 574.901 548.615 C 575.981 555.702, 577.173 564.538, 577.549 568.250 C 577.925 571.962, 578.534 575, 578.902 575 C 579.707 575, 589.336 571.153, 669.500 538.806 C 839.015 470.404, 894.238 447.076, 903.920 439.777 C 917.194 429.770, 930.263 413.416, 937.399 397.883 C 940.511 391.108, 946 375.196, 946 372.948 C 946 371.128, 944.448 372.121, 936.873 378.788 M 500.500 391.519 C 496.148 393.705, 491.147 399.746, 489.810 404.434 C 488.248 409.909, 487.535 410.677, 483.270 411.477 C 477.247 412.607, 469.912 416.913, 464.410 422.548 C 458.610 428.489, 453.008 438.719, 452.985 443.410 C 452.959 448.911, 451.013 451.239, 445.384 452.504 C 435.133 454.807, 425.728 462.704, 420.524 473.379 C 412.144 490.569, 417.972 504.993, 433.300 504.998 C 441.593 505.001, 447.812 500.061, 450.150 491.614 C 451.479 486.813, 451.599 486.703, 457.001 485.325 C 470.576 481.862, 483.292 467.881, 485.920 453.529 C 486.522 450.245, 487.573 447.035, 488.257 446.397 C 488.941 445.758, 491.975 444.455, 495 443.502 C 511.383 438.337, 522.997 423.907, 522.999 408.718 C 523 399.092, 521.377 395.865, 514.915 392.645 C 508.902 389.649, 504.854 389.332, 500.500 391.519 M 274.632 409.101 C 251.341 412.502, 208.840 426.867, 182.820 440.133 C 165.027 449.204, 153.877 457.017, 142.416 468.445 C 134.248 476.589, 131.587 480.010, 128.416 486.446 C 124.616 494.158, 124.490 494.750, 124.152 506.516 C 123.490 529.588, 127.860 542.909, 139.780 554.153 C 156.497 569.924, 174.761 574.036, 228.179 574.055 C 249.299 574.063, 255.295 573.735, 263.654 572.115 C 288.069 567.382, 311.731 556.163, 329.194 541.039 C 342.522 529.496, 353.338 514.957, 359.725 500 C 362.478 493.551, 362.500 493.328, 362.500 471.425 L 362.500 449.349 358.313 440.925 C 353.355 430.949, 346.283 422.721, 338.867 418.301 C 325.534 410.354, 295.505 406.053, 274.632 409.101 M 277.352 443.957 C 259.928 445.957, 239.636 451.539, 216.500 460.696 C 183.610 473.714, 166.402 485.328, 160.320 498.611 C 158.047 503.577, 157.813 505.150, 158.203 512.847 C 158.707 522.783, 160.800 527.861, 166.428 532.803 C 170.595 536.461, 174.227 537.564, 186.784 538.980 C 198.921 540.349, 246.389 540.370, 256 539.011 C 301.248 532.611, 332.317 502.815, 329.708 468.323 C 328.745 455.591, 323.743 448.587, 313.295 445.342 C 307.588 443.569, 287.481 442.795, 277.352 443.957 M 245.934 458.709 C 242.493 461.605, 239.058 468.075, 239.022 471.730 C 238.945 479.561, 247.777 489, 255.184 489 C 260.328 489, 266.221 485.888, 269.692 481.337 C 272.078 478.208, 272.500 476.716, 272.500 471.394 C 272.500 465.803, 272.178 464.793, 269.500 461.976 C 265.118 457.368, 261.828 456, 255.126 456 C 250.092 456, 248.648 456.425, 245.934 458.709 M 273.875 491.439 C 268.789 494.895, 266.678 499.867, 267.204 507.147 C 267.682 513.758, 269.810 517.388, 274.982 520.417 C 279.979 523.343, 286.192 522.947, 291.268 519.380 C 300.614 512.811, 302.626 504.570, 296.750 496.930 C 290.555 488.874, 281.018 486.585, 273.875 491.439 M 196.791 494.988 C 186.363 498.132, 182.109 508.853, 187.250 519.030 C 192.614 529.649, 204.908 531.221, 213.128 522.339 C 216.827 518.342, 218.119 515.473, 218.179 511.121 C 218.270 504.512, 213.879 498.519, 206.768 495.548 C 202.717 493.855, 200.891 493.753, 196.791 494.988 M 410.500 602.405 C 342.900 629.940, 193.777 693.596, 185.474 698.462 C 180.341 701.471, 175.357 707.005, 172.890 712.435 C 170.749 717.149, 170.324 729.763, 172.132 734.949 C 173.114 737.765, 173.622 738.126, 175.952 737.660 C 178.716 737.107, 285.815 694.305, 353.731 666.610 C 411.949 642.871, 437.932 631.537, 439.332 629.272 C 439.594 628.847, 438.119 622.200, 436.054 614.500 C 433.988 606.800, 431.998 599.263, 431.630 597.750 C 431.263 596.237, 430.408 595.016, 429.731 595.037 C 429.054 595.057, 420.400 598.372, 410.500 602.405'
    }));
    
    series2.labelsContainer.set("width", 100);
    series2.ticks.template.set("location", 0.6);
    
    
    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/sliced-chart/#Setting_data
    // series2.data = pineappleData
    // series2.data.setAll(
    //     // { category: "B", value: 40 },
    //     // { category: "A", value: 60 }
    //     pineappleData
    //   );
    
    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    chart.set("layout", root.verticalLayout);
    
    var legend = chart.children.moveValue(am5.Legend.new(root, {
      paddingBottom: 15,
      paddingTop: 15,
      x: am5.percent(50),
      dx: -150,
      centerX: am5.p50
    }), 0);
    
    legend.markers.template.setAll({ width: 30, height: 30 });
    legend.markerRectangles.template.setAll({
      cornerRadiusBL: 20,
      cornerRadiusBR: 20,
      cornerRadiusTL: 20,
      cornerRadiusTR: 20
    });
    
    legend.data.setAll(series2.dataItems);
    
    
    // Play  initial se ries animation
    // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
    chart.appear(1000, 100);
    
    });