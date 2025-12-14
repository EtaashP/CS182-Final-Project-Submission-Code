Starting PBT ViT Experiment with Timing...
Note: This will train ViT-Small models on CIFAR-10
Each member may have different batch sizes

Using device: cuda
Starting PBT Training for ViT-Small...
Population size: 5
Total epochs: 70
Exploit interval: 5 epochs

============================================================
Epoch 1/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6499910354614258 seconds
 LR changed during epoch: 4.84e-08 -> 3.79e-05
total runtime to train this model was 32.20870804786682 seconds
evaluation in 2.335430145263672 seconds
  Loss: 1.8976
  Train Accuracy: 28.81%
  Test Accuracy: 34.96%

--- Training Member 1 (Batch size: 128) ---
built data in 1.644380807876587 seconds
 LR changed during epoch: 1.34e-07 -> 5.23e-05
total runtime to train this model was 15.774835586547852 seconds
evaluation in 2.2698140144348145 seconds
  Loss: 1.8932
  Train Accuracy: 29.39%
  Test Accuracy: 34.91%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6239724159240723 seconds
 LR changed during epoch: 4.75e-07 -> 9.36e-05
total runtime to train this model was 10.251625537872314 seconds
evaluation in 2.268690347671509 seconds
  Loss: 1.9062
  Train Accuracy: 28.87%
  Test Accuracy: 36.16%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6535382270812988 seconds
 LR changed during epoch: 6.71e-08 -> 5.25e-05
total runtime to train this model was 32.42977476119995 seconds
evaluation in 2.263580083847046 seconds
  Loss: 1.8608
  Train Accuracy: 30.29%
  Test Accuracy: 36.60%

--- Training Member 4 (Batch size: 128) ---
built data in 1.668839693069458 seconds
 LR changed during epoch: 1.82e-07 -> 7.15e-05
total runtime to train this model was 16.994755268096924 seconds
evaluation in 2.271158218383789 seconds
  Loss: 1.8833
  Train Accuracy: 29.75%
  Test Accuracy: 34.49%

============================================================
Epoch 1 Summary:
============================================================
Time: 127.31s (Avg member: 25.46s)
Population Mean Accuracy: 35.42%
Best Member Accuracy: 36.60%
Mean Batch Size: 128
Mean Learning Rate: 3.07e-04
Mean Weight Decay: 0.098

============================================================
Epoch 2/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6654560565948486 seconds
 LR changed during epoch: 3.79e-05 -> 7.58e-05
total runtime to train this model was 31.16409134864807 seconds
evaluation in 2.2695322036743164 seconds
  Loss: 1.6360
  Train Accuracy: 39.71%
  Test Accuracy: 45.56%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6750767230987549 seconds
 LR changed during epoch: 5.23e-05 -> 1.05e-04
total runtime to train this model was 16.219470977783203 seconds
evaluation in 2.2801589965820312 seconds
  Loss: 1.6239
  Train Accuracy: 39.90%
  Test Accuracy: 47.47%

--- Training Member 2 (Batch size: 256) ---
built data in 1.664853572845459 seconds
 LR changed during epoch: 9.36e-05 -> 1.87e-04
total runtime to train this model was 10.156171083450317 seconds
evaluation in 2.26326847076416 seconds
  Loss: 1.6248
  Train Accuracy: 39.98%
  Test Accuracy: 42.78%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6681773662567139 seconds
 LR changed during epoch: 5.25e-05 -> 1.05e-04
total runtime to train this model was 32.197240114212036 seconds
evaluation in 2.269099235534668 seconds
  Loss: 1.5647
  Train Accuracy: 42.67%
  Test Accuracy: 46.46%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6624393463134766 seconds
 LR changed during epoch: 7.15e-05 -> 1.43e-04
total runtime to train this model was 16.489811420440674 seconds
evaluation in 2.2708377838134766 seconds
  Loss: 1.5817
  Train Accuracy: 41.77%
  Test Accuracy: 45.75%

============================================================
Epoch 2 Summary:
============================================================
Time: 125.92s (Avg member: 25.18s)
Population Mean Accuracy: 45.60%
Best Member Accuracy: 47.47%
Mean Batch Size: 128
Mean Learning Rate: 3.07e-04
Mean Weight Decay: 0.098

============================================================
Epoch 3/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.670034646987915 seconds
 LR changed during epoch: 7.58e-05 -> 1.14e-04
total runtime to train this model was 32.04112362861633 seconds
evaluation in 2.278620719909668 seconds
  Loss: 1.4055
  Train Accuracy: 48.64%
  Test Accuracy: 49.04%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6618220806121826 seconds
 LR changed during epoch: 1.05e-04 -> 1.57e-04
total runtime to train this model was 16.45198392868042 seconds
evaluation in 2.2884678840637207 seconds
  Loss: 1.4061
  Train Accuracy: 48.37%
  Test Accuracy: 53.47%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6756441593170166 seconds
 LR changed during epoch: 1.87e-04 -> 2.80e-04
total runtime to train this model was 10.318512201309204 seconds
evaluation in 2.267935037612915 seconds
  Loss: 1.4093
  Train Accuracy: 48.40%
  Test Accuracy: 50.22%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6615104675292969 seconds
 LR changed during epoch: 1.05e-04 -> 1.58e-04
total runtime to train this model was 31.966097116470337 seconds
evaluation in 2.2739226818084717 seconds
  Loss: 1.3678
  Train Accuracy: 50.37%
  Test Accuracy: 50.66%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6711797714233398 seconds
 LR changed during epoch: 1.43e-04 -> 2.14e-04
total runtime to train this model was 16.206926584243774 seconds
evaluation in 2.280172824859619 seconds
  Loss: 1.3801
  Train Accuracy: 49.58%
  Test Accuracy: 51.88%

============================================================
Epoch 3 Summary:
============================================================
Time: 126.72s (Avg member: 25.34s)
Population Mean Accuracy: 51.05%
Best Member Accuracy: 53.47%
Mean Batch Size: 128
Mean Learning Rate: 3.07e-04
Mean Weight Decay: 0.098

============================================================
Epoch 4/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6648645401000977 seconds
 LR changed during epoch: 1.14e-04 -> 1.52e-04
total runtime to train this model was 31.43696403503418 seconds
evaluation in 2.2877793312072754 seconds
  Loss: 1.2917
  Train Accuracy: 52.86%
  Test Accuracy: 54.29%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6739633083343506 seconds
 LR changed during epoch: 1.57e-04 -> 2.09e-04
total runtime to train this model was 16.58841896057129 seconds
evaluation in 2.2714948654174805 seconds
  Loss: 1.2767
  Train Accuracy: 53.56%
  Test Accuracy: 58.02%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6574316024780273 seconds
 LR changed during epoch: 2.80e-04 -> 3.73e-04
total runtime to train this model was 10.292150735855103 seconds
evaluation in 2.283973217010498 seconds
  Loss: 1.2787
  Train Accuracy: 53.80%
  Test Accuracy: 56.19%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6768450736999512 seconds
 LR changed during epoch: 1.58e-04 -> 2.10e-04
total runtime to train this model was 32.544740438461304 seconds
evaluation in 2.308483123779297 seconds
  Loss: 1.2628
  Train Accuracy: 54.29%
  Test Accuracy: 58.25%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6682183742523193 seconds
 LR changed during epoch: 2.14e-04 -> 2.85e-04
total runtime to train this model was 16.21080994606018 seconds
evaluation in 2.2679293155670166 seconds
  Loss: 1.2734
  Train Accuracy: 53.93%
  Test Accuracy: 54.95%

============================================================
Epoch 4 Summary:
============================================================
Time: 126.84s (Avg member: 25.37s)
Population Mean Accuracy: 56.34%
Best Member Accuracy: 58.25%
Mean Batch Size: 128
Mean Learning Rate: 3.07e-04
Mean Weight Decay: 0.098

============================================================
Epoch 5/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6811163425445557 seconds
 LR changed during epoch: 1.52e-04 -> 1.89e-04
total runtime to train this model was 32.39140248298645 seconds
evaluation in 2.3025691509246826 seconds
  Loss: 1.2142
  Train Accuracy: 56.06%
  Test Accuracy: 58.40%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6746115684509277 seconds
 LR changed during epoch: 2.09e-04 -> 2.61e-04
total runtime to train this model was 16.203702211380005 seconds
evaluation in 2.27298641204834 seconds
  Loss: 1.2080
  Train Accuracy: 56.35%
  Test Accuracy: 57.47%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6731562614440918 seconds
 LR changed during epoch: 3.73e-04 -> 4.66e-04
total runtime to train this model was 10.323847532272339 seconds
evaluation in 2.276492118835449 seconds
  Loss: 1.2043
  Train Accuracy: 56.46%
  Test Accuracy: 56.46%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6577658653259277 seconds
 LR changed during epoch: 2.10e-04 -> 2.62e-04
total runtime to train this model was 31.435343742370605 seconds
evaluation in 2.266954183578491 seconds
  Loss: 1.2037
  Train Accuracy: 56.67%
  Test Accuracy: 57.29%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6715641021728516 seconds
 LR changed during epoch: 2.85e-04 -> 3.57e-04
total runtime to train this model was 16.24461555480957 seconds
evaluation in 2.2724609375 seconds
  Loss: 1.2118
  Train Accuracy: 56.14%
  Test Accuracy: 58.42%

--- Population Update (Epoch 5) ---

=== PBT Exploit & Explore ===
Truncating 1 members
Top performers: ['58.42%']
Bottom performers: ['56.46%']
Member 2: lr changed from 0.00046580972075259094 to 0.0006153612804259906
Member 2: weight_decay changed from 0.04163760518412271 to 0.026681328807430384
Member 2: drop_path changed from 0.08681703746394512 to 0.09437137524108624
Member 2 copied from 4
  LR=6.15e-04, WD=0.027, DropPath=0.094, Warmup=5 epochs, Batch=256

============================================================
Epoch 5 Summary:
============================================================
Time: 126.36s (Avg member: 25.27s)
Population Mean Accuracy: 57.61%
Best Member Accuracy: 58.42%
Mean Batch Size: 128
Mean Learning Rate: 3.37e-04
Mean Weight Decay: 0.095

============================================================
Epoch 6/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6662743091583252 seconds
 LR changed during epoch: 1.89e-04 -> 1.89e-04
total runtime to train this model was 32.209754943847656 seconds
evaluation in 2.2741587162017822 seconds
  Loss: 1.1493
  Train Accuracy: 58.72%
  Test Accuracy: 61.21%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6683011054992676 seconds
 LR changed during epoch: 2.61e-04 -> 2.61e-04
total runtime to train this model was 16.27411198616028 seconds
evaluation in 2.2723233699798584 seconds
  Loss: 1.1353
  Train Accuracy: 59.08%
  Test Accuracy: 60.98%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6611526012420654 seconds
 LR changed during epoch: 6.28e-07 -> 1.24e-04
total runtime to train this model was 10.319022417068481 seconds
evaluation in 2.270007848739624 seconds
  Loss: 1.0262
  Train Accuracy: 63.11%
  Test Accuracy: 64.32%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6761202812194824 seconds
 LR changed during epoch: 2.62e-04 -> 2.62e-04
total runtime to train this model was 31.679444313049316 seconds
evaluation in 2.267965793609619 seconds
  Loss: 1.1612
  Train Accuracy: 58.22%
  Test Accuracy: 61.02%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6659135818481445 seconds
 LR changed during epoch: 3.57e-04 -> 3.56e-04
total runtime to train this model was 16.41585350036621 seconds
evaluation in 2.267348527908325 seconds
  Loss: 1.1615
  Train Accuracy: 58.23%
  Test Accuracy: 60.68%

============================================================
Epoch 6 Summary:
============================================================
Time: 126.59s (Avg member: 25.32s)
Population Mean Accuracy: 61.64%
Best Member Accuracy: 64.32%
Mean Batch Size: 128
Mean Learning Rate: 3.37e-04
Mean Weight Decay: 0.095

============================================================
Epoch 7/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6724088191986084 seconds
 LR changed during epoch: 1.89e-04 -> 1.89e-04
total runtime to train this model was 33.264206409454346 seconds
evaluation in 2.2882161140441895 seconds
  Loss: 1.0816
  Train Accuracy: 61.31%
  Test Accuracy: 62.82%

--- Training Member 1 (Batch size: 128) ---
built data in 1.658402681350708 seconds
 LR changed during epoch: 2.61e-04 -> 2.60e-04
total runtime to train this model was 16.520406007766724 seconds
evaluation in 2.2720465660095215 seconds
  Loss: 1.0781
  Train Accuracy: 61.31%
  Test Accuracy: 62.84%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6747524738311768 seconds
 LR changed during epoch: 1.24e-04 -> 2.47e-04
total runtime to train this model was 10.235203266143799 seconds
evaluation in 2.27557635307312 seconds
  Loss: 0.9958
  Train Accuracy: 64.18%
  Test Accuracy: 64.55%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6589093208312988 seconds
 LR changed during epoch: 2.62e-04 -> 2.62e-04
total runtime to train this model was 31.573673486709595 seconds
evaluation in 2.2715847492218018 seconds
  Loss: 1.0908
  Train Accuracy: 60.82%
  Test Accuracy: 63.84%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6754076480865479 seconds
 LR changed during epoch: 3.56e-04 -> 3.56e-04
total runtime to train this model was 16.276681900024414 seconds
evaluation in 2.2665297985076904 seconds
  Loss: 1.0943
  Train Accuracy: 60.63%
  Test Accuracy: 60.57%

============================================================
Epoch 7 Summary:
============================================================
Time: 127.59s (Avg member: 25.52s)
Population Mean Accuracy: 62.92%
Best Member Accuracy: 64.55%
Mean Batch Size: 128
Mean Learning Rate: 3.37e-04
Mean Weight Decay: 0.095

============================================================
Epoch 8/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.67225980758667 seconds
 LR changed during epoch: 1.89e-04 -> 1.88e-04
total runtime to train this model was 32.363919734954834 seconds
evaluation in 2.2688560485839844 seconds
  Loss: 1.0268
  Train Accuracy: 63.34%
  Test Accuracy: 64.54%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6768298149108887 seconds
 LR changed during epoch: 2.60e-04 -> 2.60e-04
total runtime to train this model was 16.26049542427063 seconds
evaluation in 2.272341728210449 seconds
  Loss: 1.0151
  Train Accuracy: 63.66%
  Test Accuracy: 63.84%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6553175449371338 seconds
 LR changed during epoch: 2.47e-04 -> 3.70e-04
total runtime to train this model was 10.222495317459106 seconds
evaluation in 2.269547939300537 seconds
  Loss: 1.0133
  Train Accuracy: 63.55%
  Test Accuracy: 61.77%

--- Training Member 3 (Batch size: 64) ---
built data in 1.670365333557129 seconds
 LR changed during epoch: 2.62e-04 -> 2.61e-04
total runtime to train this model was 31.30094003677368 seconds
evaluation in 2.2735655307769775 seconds
  Loss: 1.0299
  Train Accuracy: 63.18%
  Test Accuracy: 64.32%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6622593402862549 seconds
 LR changed during epoch: 3.56e-04 -> 3.55e-04
total runtime to train this model was 16.03605556488037 seconds
evaluation in 2.2727150917053223 seconds
  Loss: 1.0413
  Train Accuracy: 62.86%
  Test Accuracy: 61.38%

============================================================
Epoch 8 Summary:
============================================================
Time: 125.88s (Avg member: 25.18s)
Population Mean Accuracy: 63.17%
Best Member Accuracy: 64.54%
Mean Batch Size: 128
Mean Learning Rate: 3.37e-04
Mean Weight Decay: 0.095

============================================================
Epoch 9/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6662378311157227 seconds
 LR changed during epoch: 1.88e-04 -> 1.88e-04
total runtime to train this model was 31.317172527313232 seconds
evaluation in 2.275770902633667 seconds
  Loss: 0.9685
  Train Accuracy: 65.56%
  Test Accuracy: 67.75%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6622865200042725 seconds
 LR changed during epoch: 2.60e-04 -> 2.59e-04
total runtime to train this model was 16.775484561920166 seconds
evaluation in 2.2814297676086426 seconds
  Loss: 0.9730
  Train Accuracy: 65.39%
  Test Accuracy: 64.08%

--- Training Member 2 (Batch size: 256) ---
built data in 1.672699213027954 seconds
 LR changed during epoch: 3.70e-04 -> 4.93e-04
total runtime to train this model was 10.175883293151855 seconds
evaluation in 2.274740219116211 seconds
  Loss: 1.0242
  Train Accuracy: 63.44%
  Test Accuracy: 63.98%

--- Training Member 3 (Batch size: 64) ---
built data in 1.663654088973999 seconds
 LR changed during epoch: 2.61e-04 -> 2.60e-04
total runtime to train this model was 31.696929931640625 seconds
evaluation in 2.2682130336761475 seconds
  Loss: 0.9799
  Train Accuracy: 65.08%
  Test Accuracy: 66.41%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6763994693756104 seconds
 LR changed during epoch: 3.55e-04 -> 3.53e-04
total runtime to train this model was 16.405606746673584 seconds
evaluation in 2.267477035522461 seconds
  Loss: 0.9944
  Train Accuracy: 64.61%
  Test Accuracy: 65.51%

============================================================
Epoch 9 Summary:
============================================================
Time: 126.09s (Avg member: 25.22s)
Population Mean Accuracy: 65.55%
Best Member Accuracy: 67.75%
Mean Batch Size: 128
Mean Learning Rate: 3.37e-04
Mean Weight Decay: 0.095

============================================================
Epoch 10/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6656947135925293 seconds
 LR changed during epoch: 1.88e-04 -> 1.87e-04
total runtime to train this model was 31.351360082626343 seconds
evaluation in 2.2679693698883057 seconds
  Loss: 0.9145
  Train Accuracy: 67.40%
  Test Accuracy: 68.38%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6674203872680664 seconds
 LR changed during epoch: 2.59e-04 -> 2.57e-04
total runtime to train this model was 15.86595869064331 seconds
evaluation in 2.2743749618530273 seconds
  Loss: 0.9290
  Train Accuracy: 66.94%
  Test Accuracy: 66.28%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6624755859375 seconds
 LR changed during epoch: 4.93e-04 -> 6.15e-04
total runtime to train this model was 10.189606666564941 seconds
evaluation in 2.276550769805908 seconds
  Loss: 1.0223
  Train Accuracy: 63.39%
  Test Accuracy: 63.80%

--- Training Member 3 (Batch size: 64) ---
built data in 1.672821044921875 seconds
 LR changed during epoch: 2.60e-04 -> 2.59e-04
total runtime to train this model was 31.047945976257324 seconds
evaluation in 2.270712375640869 seconds
  Loss: 0.9259
  Train Accuracy: 67.00%
  Test Accuracy: 68.65%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6659190654754639 seconds
 LR changed during epoch: 3.53e-04 -> 3.51e-04
total runtime to train this model was 15.989959239959717 seconds
evaluation in 2.2711124420166016 seconds
  Loss: 0.9449
  Train Accuracy: 66.09%
  Test Accuracy: 66.74%

--- Population Update (Epoch 10) ---

=== PBT Exploit & Explore ===
Truncating 1 members
Top performers: ['68.65%']
Bottom performers: ['63.80%']
Member 2: lr changed from 0.0006153612804259906 to 0.0008079195517748263
Member 2: weight_decay changed from 0.026681328807430384 to 0.038415621765723364
Member 2: drop_path changed from 0.09437137524108624 to 0.07361470829019405
Member 2: batch_size changed from 256 to 128
Member 2 copied from 3
  LR=8.08e-04, WD=0.038, DropPath=0.074, Warmup=5 epochs, Batch=128

============================================================
Epoch 10 Summary:
============================================================
Time: 124.15s (Avg member: 24.83s)
Population Mean Accuracy: 66.77%
Best Member Accuracy: 68.65%
Mean Batch Size: 102
Mean Learning Rate: 3.75e-04
Mean Weight Decay: 0.097

============================================================
Epoch 11/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.673328161239624 seconds
 LR changed during epoch: 1.87e-04 -> 1.85e-04
total runtime to train this model was 31.006000518798828 seconds
evaluation in 2.2663187980651855 seconds
  Loss: 0.8680
  Train Accuracy: 69.24%
  Test Accuracy: 69.65%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6579675674438477 seconds
 LR changed during epoch: 2.57e-04 -> 2.56e-04
total runtime to train this model was 16.337564945220947 seconds
evaluation in 2.2696139812469482 seconds
  Loss: 0.8848
  Train Accuracy: 68.64%
  Test Accuracy: 70.81%

--- Training Member 2 (Batch size: 128) ---
built data in 1.6722307205200195 seconds
 LR changed during epoch: 4.13e-07 -> 1.62e-04
total runtime to train this model was 16.324458599090576 seconds
evaluation in 2.271833896636963 seconds
  Loss: 0.7771
  Train Accuracy: 72.53%
  Test Accuracy: 72.51%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6793186664581299 seconds
 LR changed during epoch: 2.59e-04 -> 2.57e-04
total runtime to train this model was 31.733316898345947 seconds
evaluation in 2.2991061210632324 seconds
  Loss: 0.8721
  Train Accuracy: 69.05%
  Test Accuracy: 70.91%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6821074485778809 seconds
 LR changed during epoch: 3.51e-04 -> 3.49e-04
total runtime to train this model was 16.4653377532959 seconds
evaluation in 2.273601531982422 seconds
  Loss: 0.8980
  Train Accuracy: 68.20%
  Test Accuracy: 69.13%

============================================================
Epoch 11 Summary:
============================================================
Time: 131.62s (Avg member: 26.32s)
Population Mean Accuracy: 70.60%
Best Member Accuracy: 72.51%
Mean Batch Size: 102
Mean Learning Rate: 3.75e-04
Mean Weight Decay: 0.097

============================================================
Epoch 12/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.660928726196289 seconds
 LR changed during epoch: 1.85e-04 -> 1.84e-04
total runtime to train this model was 32.722187757492065 seconds
evaluation in 2.286834716796875 seconds
  Loss: 0.8273
  Train Accuracy: 70.82%
  Test Accuracy: 71.34%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6858034133911133 seconds
 LR changed during epoch: 2.56e-04 -> 2.54e-04
total runtime to train this model was 17.086056232452393 seconds
evaluation in 2.276963233947754 seconds
  Loss: 0.8513
  Train Accuracy: 69.79%
  Test Accuracy: 69.65%

--- Training Member 2 (Batch size: 128) ---
built data in 1.6728878021240234 seconds
 LR changed during epoch: 1.62e-04 -> 3.24e-04
total runtime to train this model was 16.947155952453613 seconds
evaluation in 2.2795329093933105 seconds
  Loss: 0.7976
  Train Accuracy: 71.78%
  Test Accuracy: 71.77%

--- Training Member 3 (Batch size: 64) ---
built data in 1.677640676498413 seconds
 LR changed during epoch: 2.57e-04 -> 2.55e-04
total runtime to train this model was 33.37189173698425 seconds
evaluation in 2.269998073577881 seconds
  Loss: 0.8248
  Train Accuracy: 70.75%
  Test Accuracy: 71.88%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6655755043029785 seconds
 LR changed during epoch: 3.49e-04 -> 3.46e-04
total runtime to train this model was 16.39713478088379 seconds
evaluation in 2.2687528133392334 seconds
  Loss: 0.8583
  Train Accuracy: 69.48%
  Test Accuracy: 71.06%

============================================================
Epoch 12 Summary:
============================================================
Time: 136.28s (Avg member: 27.26s)
Population Mean Accuracy: 71.14%
Best Member Accuracy: 71.88%
Mean Batch Size: 102
Mean Learning Rate: 3.75e-04
Mean Weight Decay: 0.097

============================================================
Epoch 13/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6765899658203125 seconds
 LR changed during epoch: 1.84e-04 -> 1.82e-04
total runtime to train this model was 31.831302642822266 seconds
evaluation in 2.264911651611328 seconds
  Loss: 0.7926
  Train Accuracy: 72.03%
  Test Accuracy: 73.50%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6594884395599365 seconds
 LR changed during epoch: 2.54e-04 -> 2.51e-04
total runtime to train this model was 16.088982582092285 seconds
evaluation in 2.273550033569336 seconds
  Loss: 0.8050
  Train Accuracy: 71.65%
  Test Accuracy: 72.42%

--- Training Member 2 (Batch size: 128) ---
built data in 1.6866636276245117 seconds
 LR changed during epoch: 3.24e-04 -> 4.85e-04
total runtime to train this model was 16.123913049697876 seconds
evaluation in 2.2872471809387207 seconds
  Loss: 0.8477
  Train Accuracy: 70.00%
  Test Accuracy: 70.75%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6646881103515625 seconds
 LR changed during epoch: 2.55e-04 -> 2.53e-04
total runtime to train this model was 32.07914876937866 seconds
evaluation in 2.273061752319336 seconds
  Loss: 0.7840
  Train Accuracy: 72.29%
  Test Accuracy: 69.26%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6696710586547852 seconds
 LR changed during epoch: 3.46e-04 -> 3.43e-04
total runtime to train this model was 16.348321676254272 seconds
evaluation in 2.268542766571045 seconds
  Loss: 0.8214
  Train Accuracy: 70.76%
  Test Accuracy: 72.14%

============================================================
Epoch 13 Summary:
============================================================
Time: 132.20s (Avg member: 26.44s)
Population Mean Accuracy: 71.61%
Best Member Accuracy: 73.50%
Mean Batch Size: 102
Mean Learning Rate: 3.75e-04
Mean Weight Decay: 0.097

============================================================
Epoch 14/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6630620956420898 seconds
 LR changed during epoch: 1.82e-04 -> 1.81e-04
total runtime to train this model was 31.52368927001953 seconds
evaluation in 2.28637957572937 seconds
  Loss: 0.7517
  Train Accuracy: 73.52%
  Test Accuracy: 73.27%

--- Training Member 1 (Batch size: 128) ---
built data in 1.677597999572754 seconds
 LR changed during epoch: 2.51e-04 -> 2.49e-04
total runtime to train this model was 16.266477584838867 seconds
evaluation in 2.2666337490081787 seconds
  Loss: 0.7829
  Train Accuracy: 72.18%
  Test Accuracy: 72.76%

--- Training Member 2 (Batch size: 128) ---
built data in 1.6590416431427002 seconds
 LR changed during epoch: 4.85e-04 -> 6.47e-04
total runtime to train this model was 15.998926162719727 seconds
evaluation in 2.275179624557495 seconds
  Loss: 0.8812
  Train Accuracy: 68.73%
  Test Accuracy: 68.94%

--- Training Member 3 (Batch size: 64) ---
built data in 1.676651954650879 seconds
 LR changed during epoch: 2.53e-04 -> 2.50e-04
total runtime to train this model was 32.85113191604614 seconds
evaluation in 2.28173565864563 seconds
  Loss: 0.7503
  Train Accuracy: 73.42%
  Test Accuracy: 74.09%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6680665016174316 seconds
 LR changed during epoch: 3.43e-04 -> 3.40e-04
total runtime to train this model was 17.49857234954834 seconds
evaluation in 2.267857789993286 seconds
  Loss: 0.7933
  Train Accuracy: 71.93%
  Test Accuracy: 70.93%

============================================================
Epoch 14 Summary:
============================================================
Time: 133.87s (Avg member: 26.77s)
Population Mean Accuracy: 72.00%
Best Member Accuracy: 74.09%
Mean Batch Size: 102
Mean Learning Rate: 3.75e-04
Mean Weight Decay: 0.097

============================================================
Epoch 15/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6730365753173828 seconds
 LR changed during epoch: 1.81e-04 -> 1.79e-04
total runtime to train this model was 31.87654137611389 seconds
evaluation in 2.274488925933838 seconds
  Loss: 0.7185
  Train Accuracy: 74.63%
  Test Accuracy: 75.74%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6724803447723389 seconds
 LR changed during epoch: 2.49e-04 -> 2.46e-04
total runtime to train this model was 15.9550621509552 seconds
evaluation in 2.277393102645874 seconds
  Loss: 0.7520
  Train Accuracy: 73.30%
  Test Accuracy: 73.65%

--- Training Member 2 (Batch size: 128) ---
built data in 1.667983055114746 seconds
 LR changed during epoch: 6.47e-04 -> 8.08e-04
total runtime to train this model was 16.210614919662476 seconds
evaluation in 2.273634910583496 seconds
  Loss: 0.8927
  Train Accuracy: 68.16%
  Test Accuracy: 68.87%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6658334732055664 seconds
 LR changed during epoch: 2.50e-04 -> 2.47e-04
total runtime to train this model was 31.223102569580078 seconds
evaluation in 2.266169309616089 seconds
  Loss: 0.7146
  Train Accuracy: 74.66%
  Test Accuracy: 73.06%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6702721118927002 seconds
 LR changed during epoch: 3.40e-04 -> 3.36e-04
total runtime to train this model was 16.502171993255615 seconds
evaluation in 2.267557382583618 seconds
  Loss: 0.7609
  Train Accuracy: 72.96%
  Test Accuracy: 71.95%

--- Population Update (Epoch 15) ---

=== PBT Exploit & Explore ===
Truncating 1 members
Top performers: ['75.74%']
Bottom performers: ['68.87%']
Member 2: lr changed from 0.0008079195517748263 to 0.0010000000000000002
Member 2: weight_decay changed from 0.038415621765723364 to 0.037699552600738304
Member 2: drop_path changed from 0.07361470829019405 to 0.05660020565638448
Member 2: batch_size changed from 128 to 64
Member 2 copied from 0
  LR=1.00e-03, WD=0.038, DropPath=0.057, Warmup=5 epochs, Batch=64

============================================================
Epoch 15 Summary:
============================================================
Time: 131.49s (Avg member: 26.30s)
Population Mean Accuracy: 72.65%
Best Member Accuracy: 75.74%
Mean Batch Size: 90
Mean Learning Rate: 4.14e-04
Mean Weight Decay: 0.097

============================================================
Epoch 16/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6614222526550293 seconds
 LR changed during epoch: 1.79e-04 -> 1.76e-04
total runtime to train this model was 31.345380067825317 seconds
evaluation in 2.276670217514038 seconds
  Loss: 0.6925
  Train Accuracy: 75.48%
  Test Accuracy: 76.90%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6728196144104004 seconds
 LR changed during epoch: 2.46e-04 -> 2.43e-04
total runtime to train this model was 16.01776361465454 seconds
evaluation in 2.2701563835144043 seconds
  Loss: 0.7156
  Train Accuracy: 74.66%
  Test Accuracy: 76.24%

--- Training Member 2 (Batch size: 64) ---
built data in 1.6628942489624023 seconds
 LR changed during epoch: 2.56e-07 -> 2.00e-04
total runtime to train this model was 31.365559577941895 seconds
evaluation in 2.2750344276428223 seconds
  Loss: 0.6259
  Train Accuracy: 77.91%
  Test Accuracy: 74.71%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6750197410583496 seconds
 LR changed during epoch: 2.47e-04 -> 2.44e-04
total runtime to train this model was 31.16805386543274 seconds
evaluation in 2.26728892326355 seconds
  Loss: 0.6849
  Train Accuracy: 75.73%
  Test Accuracy: 74.81%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6634244918823242 seconds
 LR changed during epoch: 3.36e-04 -> 3.32e-04
total runtime to train this model was 16.10912775993347 seconds
evaluation in 2.2754290103912354 seconds
  Loss: 0.7301
  Train Accuracy: 74.16%
  Test Accuracy: 73.93%

============================================================
Epoch 16 Summary:
============================================================
Time: 145.71s (Avg member: 29.14s)
Population Mean Accuracy: 75.32%
Best Member Accuracy: 76.90%
Mean Batch Size: 90
Mean Learning Rate: 4.14e-04
Mean Weight Decay: 0.097

============================================================
Epoch 17/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6735343933105469 seconds
 LR changed during epoch: 1.76e-04 -> 1.74e-04
total runtime to train this model was 31.047236680984497 seconds
evaluation in 2.2797155380249023 seconds
  Loss: 0.6619
  Train Accuracy: 76.61%
  Test Accuracy: 76.64%

--- Training Member 1 (Batch size: 128) ---
built data in 1.669748067855835 seconds
 LR changed during epoch: 2.43e-04 -> 2.40e-04
total runtime to train this model was 16.326258659362793 seconds
evaluation in 2.281956195831299 seconds
  Loss: 0.6856
  Train Accuracy: 75.86%
  Test Accuracy: 76.24%

--- Training Member 2 (Batch size: 64) ---
built data in 1.6767849922180176 seconds
 LR changed during epoch: 2.00e-04 -> 4.00e-04
total runtime to train this model was 32.10462188720703 seconds
evaluation in 2.2780230045318604 seconds
  Loss: 0.7673
  Train Accuracy: 72.91%
  Test Accuracy: 69.47%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6786754131317139 seconds
 LR changed during epoch: 2.44e-04 -> 2.41e-04
total runtime to train this model was 31.866468906402588 seconds
evaluation in 2.2722349166870117 seconds
  Loss: 0.6488
  Train Accuracy: 77.03%
  Test Accuracy: 75.55%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6717755794525146 seconds
 LR changed during epoch: 3.32e-04 -> 3.27e-04
total runtime to train this model was 16.992887496948242 seconds
evaluation in 2.268460273742676 seconds
  Loss: 0.6983
  Train Accuracy: 75.42%
  Test Accuracy: 73.92%

============================================================
Epoch 17 Summary:
============================================================
Time: 148.09s (Avg member: 29.62s)
Population Mean Accuracy: 74.36%
Best Member Accuracy: 76.64%
Mean Batch Size: 90
Mean Learning Rate: 4.14e-04
Mean Weight Decay: 0.097

============================================================
Epoch 18/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.685140609741211 seconds
 LR changed during epoch: 1.74e-04 -> 1.71e-04
total runtime to train this model was 32.32587265968323 seconds
evaluation in 2.277440309524536 seconds
  Loss: 0.6366
  Train Accuracy: 77.69%
  Test Accuracy: 77.99%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6845479011535645 seconds
 LR changed during epoch: 2.40e-04 -> 2.36e-04
total runtime to train this model was 16.876036167144775 seconds
evaluation in 2.2740602493286133 seconds
  Loss: 0.6575
  Train Accuracy: 76.70%
  Test Accuracy: 77.51%

--- Training Member 2 (Batch size: 64) ---
built data in 1.6880230903625488 seconds
 LR changed during epoch: 4.00e-04 -> 6.00e-04
total runtime to train this model was 33.61726784706116 seconds
evaluation in 2.2749974727630615 seconds
  Loss: 0.8777
  Train Accuracy: 68.94%
  Test Accuracy: 66.59%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6698126792907715 seconds
 LR changed during epoch: 2.41e-04 -> 2.37e-04
total runtime to train this model was 33.29811358451843 seconds
evaluation in 2.278024911880493 seconds
  Loss: 0.6215
  Train Accuracy: 77.87%
  Test Accuracy: 75.46%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6744024753570557 seconds
 LR changed during epoch: 3.27e-04 -> 3.23e-04
total runtime to train this model was 16.769325017929077 seconds
evaluation in 2.297607660293579 seconds
  Loss: 0.6717
  Train Accuracy: 76.34%
  Test Accuracy: 76.84%

============================================================
Epoch 18 Summary:
============================================================
Time: 152.70s (Avg member: 30.54s)
Population Mean Accuracy: 74.88%
Best Member Accuracy: 77.99%
Mean Batch Size: 90
Mean Learning Rate: 4.14e-04
Mean Weight Decay: 0.097

============================================================
Epoch 19/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.672250509262085 seconds
 LR changed during epoch: 1.71e-04 -> 1.69e-04
total runtime to train this model was 32.53676915168762 seconds
evaluation in 2.2855186462402344 seconds
  Loss: 0.6073
  Train Accuracy: 78.68%
  Test Accuracy: 77.41%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6743371486663818 seconds
 LR changed during epoch: 2.36e-04 -> 2.32e-04
total runtime to train this model was 16.617571115493774 seconds
evaluation in 2.281787872314453 seconds
  Loss: 0.6375
  Train Accuracy: 77.47%
  Test Accuracy: 76.90%

--- Training Member 2 (Batch size: 64) ---
built data in 1.680107593536377 seconds
 LR changed during epoch: 6.00e-04 -> 8.00e-04
total runtime to train this model was 32.570136070251465 seconds
evaluation in 2.2990634441375732 seconds
  Loss: 0.9364
  Train Accuracy: 67.04%
  Test Accuracy: 65.55%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6640617847442627 seconds
 LR changed during epoch: 2.37e-04 -> 2.34e-04
total runtime to train this model was 31.91559362411499 seconds
evaluation in 2.2827563285827637 seconds
  Loss: 0.5945
  Train Accuracy: 78.98%
  Test Accuracy: 77.42%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6806349754333496 seconds
 LR changed during epoch: 3.23e-04 -> 3.17e-04
total runtime to train this model was 17.249938011169434 seconds
evaluation in 2.267604112625122 seconds
  Loss: 0.6452
  Train Accuracy: 77.24%
  Test Accuracy: 76.76%

============================================================
Epoch 19 Summary:
============================================================
Time: 150.68s (Avg member: 30.14s)
Population Mean Accuracy: 74.81%
Best Member Accuracy: 77.42%
Mean Batch Size: 90
Mean Learning Rate: 4.14e-04
Mean Weight Decay: 0.097

============================================================
Epoch 20/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6656498908996582 seconds
 LR changed during epoch: 1.69e-04 -> 1.66e-04
total runtime to train this model was 32.28191089630127 seconds
evaluation in 2.2694270610809326 seconds
  Loss: 0.5818
  Train Accuracy: 79.32%
  Test Accuracy: 78.58%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6720354557037354 seconds
 LR changed during epoch: 2.32e-04 -> 2.28e-04
total runtime to train this model was 16.38970422744751 seconds
evaluation in 2.265373945236206 seconds
  Loss: 0.6141
  Train Accuracy: 78.42%
  Test Accuracy: 77.87%

--- Training Member 2 (Batch size: 64) ---
built data in 1.6683642864227295 seconds
 LR changed during epoch: 8.00e-04 -> 1.00e-03
total runtime to train this model was 31.85164189338684 seconds
evaluation in 2.2689104080200195 seconds
  Loss: 0.9610
  Train Accuracy: 65.79%
  Test Accuracy: 65.21%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6761696338653564 seconds
 LR changed during epoch: 2.34e-04 -> 2.30e-04
total runtime to train this model was 31.81078600883484 seconds
evaluation in 2.2788031101226807 seconds
  Loss: 0.5745
  Train Accuracy: 79.68%
  Test Accuracy: 77.31%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6687922477722168 seconds
 LR changed during epoch: 3.17e-04 -> 3.12e-04
total runtime to train this model was 16.169127941131592 seconds
evaluation in 2.271489381790161 seconds
  Loss: 0.6222
  Train Accuracy: 78.13%
  Test Accuracy: 77.46%

--- Population Update (Epoch 20) ---

=== PBT Exploit & Explore ===
Truncating 1 members
Top performers: ['78.58%']
Bottom performers: ['65.21%']
Member 2: lr changed from 0.0010000000000000002 to 0.0007571615230544956
Member 2: weight_decay changed from 0.037699552600738304 to 0.05905379025531199
Member 2: drop_path changed from 0.05660020565638448 to 0.04638817641704429
Member 2: batch_size changed from 64 to 128
Member 2 copied from 0
  LR=7.57e-04, WD=0.059, DropPath=0.046, Warmup=5 epochs, Batch=128

============================================================
Epoch 20 Summary:
============================================================
Time: 148.22s (Avg member: 29.64s)
Population Mean Accuracy: 75.29%
Best Member Accuracy: 78.58%
Mean Batch Size: 102
Mean Learning Rate: 3.65e-04
Mean Weight Decay: 0.102

============================================================
Epoch 21/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6801090240478516 seconds
 LR changed during epoch: 1.66e-04 -> 1.63e-04
total runtime to train this model was 31.663415908813477 seconds
evaluation in 2.2727887630462646 seconds
  Loss: 0.5574
  Train Accuracy: 80.08%
  Test Accuracy: 79.29%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6831529140472412 seconds
 LR changed during epoch: 2.28e-04 -> 2.24e-04
total runtime to train this model was 16.916178941726685 seconds
evaluation in 2.2903668880462646 seconds
  Loss: 0.5928
  Train Accuracy: 79.09%
  Test Accuracy: 78.01%

--- Training Member 2 (Batch size: 128) ---
built data in 1.6749663352966309 seconds
 LR changed during epoch: 3.87e-07 -> 1.52e-04
total runtime to train this model was 17.234397888183594 seconds
evaluation in 2.2735633850097656 seconds
  Loss: 0.4680
  Train Accuracy: 83.39%
  Test Accuracy: 79.81%

--- Training Member 3 (Batch size: 64) ---
built data in 1.664308786392212 seconds
 LR changed during epoch: 2.30e-04 -> 2.25e-04
total runtime to train this model was 31.02591586112976 seconds
evaluation in 2.27724552154541 seconds
  Loss: 0.5436
  Train Accuracy: 80.85%
  Test Accuracy: 78.20%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6689350605010986 seconds
 LR changed during epoch: 3.12e-04 -> 3.06e-04
total runtime to train this model was 16.545886754989624 seconds
evaluation in 2.270564556121826 seconds
  Loss: 0.6009
  Train Accuracy: 78.89%
  Test Accuracy: 79.32%

============================================================
Epoch 21 Summary:
============================================================
Time: 133.15s (Avg member: 26.63s)
Population Mean Accuracy: 78.93%
Best Member Accuracy: 79.81%
Mean Batch Size: 102
Mean Learning Rate: 3.65e-04
Mean Weight Decay: 0.102

============================================================
Epoch 22/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.670409917831421 seconds
 LR changed during epoch: 1.63e-04 -> 1.59e-04
total runtime to train this model was 31.13742685317993 seconds
evaluation in 2.268045663833618 seconds
  Loss: 0.5376
  Train Accuracy: 81.08%
  Test Accuracy: 79.78%

--- Training Member 1 (Batch size: 128) ---
built data in 1.686183214187622 seconds
 LR changed during epoch: 2.24e-04 -> 2.20e-04
total runtime to train this model was 16.138779401779175 seconds
evaluation in 2.282808542251587 seconds
  Loss: 0.5615
  Train Accuracy: 80.23%
  Test Accuracy: 78.89%

--- Training Member 2 (Batch size: 128) ---
built data in 1.6674530506134033 seconds
 LR changed during epoch: 1.52e-04 -> 3.03e-04
total runtime to train this model was 16.2725830078125 seconds
evaluation in 2.2742669582366943 seconds
  Loss: 0.5326
  Train Accuracy: 81.24%
  Test Accuracy: 77.72%

--- Training Member 3 (Batch size: 64) ---
built data in 1.673964500427246 seconds
 LR changed during epoch: 2.25e-04 -> 2.21e-04
total runtime to train this model was 31.90865445137024 seconds
evaluation in 2.268796682357788 seconds
  Loss: 0.5167
  Train Accuracy: 81.77%
  Test Accuracy: 79.16%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6654975414276123 seconds
 LR changed during epoch: 3.06e-04 -> 3.00e-04
total runtime to train this model was 16.347216367721558 seconds
evaluation in 2.2745213508605957 seconds
  Loss: 0.5732
  Train Accuracy: 79.68%
  Test Accuracy: 78.66%

============================================================
Epoch 22 Summary:
============================================================
Time: 131.54s (Avg member: 26.31s)
Population Mean Accuracy: 78.84%
Best Member Accuracy: 79.78%
Mean Batch Size: 102
Mean Learning Rate: 3.65e-04
Mean Weight Decay: 0.102

============================================================
Epoch 23/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6751997470855713 seconds
 LR changed during epoch: 1.59e-04 -> 1.56e-04
total runtime to train this model was 31.865930795669556 seconds
evaluation in 2.26570463180542 seconds
  Loss: 0.5109
  Train Accuracy: 81.98%
  Test Accuracy: 78.87%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6560149192810059 seconds
 LR changed during epoch: 2.20e-04 -> 2.15e-04
total runtime to train this model was 16.008459329605103 seconds
evaluation in 2.2716853618621826 seconds
  Loss: 0.5417
  Train Accuracy: 80.92%
  Test Accuracy: 79.44%

--- Training Member 2 (Batch size: 128) ---
built data in 1.6710760593414307 seconds
 LR changed during epoch: 3.03e-04 -> 4.55e-04
total runtime to train this model was 16.78482484817505 seconds
evaluation in 2.2740232944488525 seconds
  Loss: 0.6116
  Train Accuracy: 78.42%
  Test Accuracy: 76.76%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6631360054016113 seconds
 LR changed during epoch: 2.21e-04 -> 2.16e-04
total runtime to train this model was 31.565636157989502 seconds
evaluation in 2.2780299186706543 seconds
  Loss: 0.4959
  Train Accuracy: 82.39%
  Test Accuracy: 79.83%

--- Training Member 4 (Batch size: 128) ---
built data in 1.677138328552246 seconds
 LR changed during epoch: 3.00e-04 -> 2.93e-04
total runtime to train this model was 16.659587383270264 seconds
evaluation in 2.277320623397827 seconds
  Loss: 0.5548
  Train Accuracy: 80.20%
  Test Accuracy: 79.69%

============================================================
Epoch 23 Summary:
============================================================
Time: 132.60s (Avg member: 26.52s)
Population Mean Accuracy: 78.92%
Best Member Accuracy: 79.83%
Mean Batch Size: 102
Mean Learning Rate: 3.65e-04
Mean Weight Decay: 0.102

============================================================
Epoch 24/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.671511173248291 seconds
 LR changed during epoch: 1.56e-04 -> 1.52e-04
total runtime to train this model was 31.715903282165527 seconds
evaluation in 2.272085428237915 seconds
  Loss: 0.4945
  Train Accuracy: 82.63%
  Test Accuracy: 79.31%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6768064498901367 seconds
 LR changed during epoch: 2.15e-04 -> 2.10e-04
total runtime to train this model was 16.74465274810791 seconds
evaluation in 2.2706031799316406 seconds
  Loss: 0.5215
  Train Accuracy: 81.47%
  Test Accuracy: 80.10%

--- Training Member 2 (Batch size: 128) ---
built data in 1.6718595027923584 seconds
 LR changed during epoch: 4.55e-04 -> 6.06e-04
total runtime to train this model was 16.02953791618347 seconds
evaluation in 2.2848856449127197 seconds
  Loss: 0.6835
  Train Accuracy: 75.92%
  Test Accuracy: 74.24%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6858594417572021 seconds
 LR changed during epoch: 2.16e-04 -> 2.11e-04
total runtime to train this model was 31.280827283859253 seconds
evaluation in 2.2746753692626953 seconds
  Loss: 0.4707
  Train Accuracy: 83.27%
  Test Accuracy: 80.96%

--- Training Member 4 (Batch size: 128) ---
built data in 1.665107250213623 seconds
 LR changed during epoch: 2.93e-04 -> 2.87e-04
total runtime to train this model was 16.779693841934204 seconds
evaluation in 2.270948886871338 seconds
  Loss: 0.5298
  Train Accuracy: 81.21%
  Test Accuracy: 78.80%

============================================================
Epoch 24 Summary:
============================================================
Time: 132.30s (Avg member: 26.46s)
Population Mean Accuracy: 78.68%
Best Member Accuracy: 80.96%
Mean Batch Size: 102
Mean Learning Rate: 3.65e-04
Mean Weight Decay: 0.102

============================================================
Epoch 25/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6786723136901855 seconds
 LR changed during epoch: 1.52e-04 -> 1.49e-04
total runtime to train this model was 32.497525453567505 seconds
evaluation in 2.2804946899414062 seconds
  Loss: 0.4695
  Train Accuracy: 83.49%
  Test Accuracy: 80.38%

--- Training Member 1 (Batch size: 128) ---
built data in 1.663886547088623 seconds
 LR changed during epoch: 2.10e-04 -> 2.05e-04
total runtime to train this model was 16.18444514274597 seconds
evaluation in 2.2703380584716797 seconds
  Loss: 0.4981
  Train Accuracy: 82.42%
  Test Accuracy: 80.94%

--- Training Member 2 (Batch size: 128) ---
built data in 1.6743428707122803 seconds
 LR changed during epoch: 6.06e-04 -> 7.57e-04
total runtime to train this model was 16.175102710723877 seconds
evaluation in 2.2699286937713623 seconds
  Loss: 0.7157
  Train Accuracy: 74.69%
  Test Accuracy: 73.38%

--- Training Member 3 (Batch size: 64) ---
built data in 1.663095474243164 seconds
 LR changed during epoch: 2.11e-04 -> 2.06e-04
total runtime to train this model was 31.649134397506714 seconds
evaluation in 2.277096748352051 seconds
  Loss: 0.4513
  Train Accuracy: 83.94%
  Test Accuracy: 81.12%

--- Training Member 4 (Batch size: 128) ---
built data in 1.672203540802002 seconds
 LR changed during epoch: 2.87e-04 -> 2.80e-04
total runtime to train this model was 15.941610097885132 seconds
evaluation in 2.2665460109710693 seconds
  Loss: 0.5158
  Train Accuracy: 81.76%
  Test Accuracy: 80.90%

--- Population Update (Epoch 25) ---

=== PBT Exploit & Explore ===
Truncating 1 members
Top performers: ['81.12%']
Bottom performers: ['73.38%']
Member 2: lr changed from 0.0007571615230544956 to 0.0008296278943550509
Member 2: weight_decay changed from 0.05905379025531199 to 0.07511673000044625
Member 2: drop_path changed from 0.04638817641704429 to 0.039228501436358774
Member 2 copied from 3
  LR=8.30e-04, WD=0.075, DropPath=0.039, Warmup=5 epochs, Batch=128

============================================================
Epoch 25 Summary:
============================================================
Time: 132.18s (Avg member: 26.43s)
Population Mean Accuracy: 79.34%
Best Member Accuracy: 81.12%
Mean Batch Size: 102
Mean Learning Rate: 3.80e-04
Mean Weight Decay: 0.105

============================================================
Epoch 26/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6675786972045898 seconds
 LR changed during epoch: 1.49e-04 -> 1.45e-04
total runtime to train this model was 31.080201864242554 seconds
evaluation in 2.273150682449341 seconds
  Loss: 0.4507
  Train Accuracy: 84.15%
  Test Accuracy: 80.81%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6730389595031738 seconds
 LR changed during epoch: 2.05e-04 -> 2.00e-04
total runtime to train this model was 15.91637396812439 seconds
evaluation in 2.268040895462036 seconds
  Loss: 0.4800
  Train Accuracy: 83.00%
  Test Accuracy: 80.99%

--- Training Member 2 (Batch size: 128) ---
built data in 1.668625831604004 seconds
 LR changed during epoch: 4.24e-07 -> 1.66e-04
total runtime to train this model was 16.335097312927246 seconds
evaluation in 2.271951675415039 seconds
  Loss: 0.3488
  Train Accuracy: 87.71%
  Test Accuracy: 81.91%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6748600006103516 seconds
 LR changed during epoch: 2.06e-04 -> 2.01e-04
total runtime to train this model was 31.495959997177124 seconds
evaluation in 2.277510404586792 seconds
  Loss: 0.4246
  Train Accuracy: 84.84%
  Test Accuracy: 81.09%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6643664836883545 seconds
 LR changed during epoch: 2.80e-04 -> 2.73e-04
total runtime to train this model was 16.26964497566223 seconds
evaluation in 2.278837203979492 seconds
  Loss: 0.4881
  Train Accuracy: 82.50%
  Test Accuracy: 80.76%

============================================================
Epoch 26 Summary:
============================================================
Time: 130.82s (Avg member: 26.16s)
Population Mean Accuracy: 81.11%
Best Member Accuracy: 81.91%
Mean Batch Size: 102
Mean Learning Rate: 3.80e-04
Mean Weight Decay: 0.105

============================================================
Epoch 27/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6705312728881836 seconds
 LR changed during epoch: 1.45e-04 -> 1.41e-04
total runtime to train this model was 31.143083333969116 seconds
evaluation in 2.2678563594818115 seconds
  Loss: 0.4305
  Train Accuracy: 84.69%
  Test Accuracy: 81.98%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6649787425994873 seconds
 LR changed during epoch: 2.00e-04 -> 1.94e-04
total runtime to train this model was 16.342653036117554 seconds
evaluation in 2.271005392074585 seconds
  Loss: 0.4593
  Train Accuracy: 83.91%
  Test Accuracy: 80.90%

--- Training Member 2 (Batch size: 128) ---
built data in 1.6692304611206055 seconds
 LR changed during epoch: 1.66e-04 -> 3.32e-04
total runtime to train this model was 16.125139951705933 seconds
evaluation in 2.2761993408203125 seconds
  Loss: 0.3951
  Train Accuracy: 85.91%
  Test Accuracy: 80.27%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6649525165557861 seconds
 LR changed during epoch: 2.01e-04 -> 1.95e-04
total runtime to train this model was 31.521899461746216 seconds
evaluation in 2.2700328826904297 seconds
  Loss: 0.4015
  Train Accuracy: 85.79%
  Test Accuracy: 81.57%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6735575199127197 seconds
 LR changed during epoch: 2.73e-04 -> 2.65e-04
total runtime to train this model was 16.491886138916016 seconds
evaluation in 2.2683377265930176 seconds
  Loss: 0.4670
  Train Accuracy: 83.43%
  Test Accuracy: 80.53%

============================================================
Epoch 27 Summary:
============================================================
Time: 131.33s (Avg member: 26.27s)
Population Mean Accuracy: 81.05%
Best Member Accuracy: 81.98%
Mean Batch Size: 102
Mean Learning Rate: 3.80e-04
Mean Weight Decay: 0.105

============================================================
Epoch 28/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6671028137207031 seconds
 LR changed during epoch: 1.41e-04 -> 1.37e-04
total runtime to train this model was 30.964367628097534 seconds
evaluation in 2.2701098918914795 seconds
  Loss: 0.4095
  Train Accuracy: 85.44%
  Test Accuracy: 80.78%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6736578941345215 seconds
 LR changed during epoch: 1.94e-04 -> 1.89e-04
total runtime to train this model was 16.78110432624817 seconds
evaluation in 2.2770962715148926 seconds
  Loss: 0.4435
  Train Accuracy: 84.26%
  Test Accuracy: 80.80%

--- Training Member 2 (Batch size: 128) ---
built data in 1.6593167781829834 seconds
 LR changed during epoch: 3.32e-04 -> 4.98e-04
total runtime to train this model was 16.34082269668579 seconds
evaluation in 2.2642135620117188 seconds
  Loss: 0.4760
  Train Accuracy: 83.10%
  Test Accuracy: 79.38%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6726100444793701 seconds
 LR changed during epoch: 1.95e-04 -> 1.90e-04
total runtime to train this model was 31.3093318939209 seconds
evaluation in 2.265531301498413 seconds
  Loss: 0.3845
  Train Accuracy: 86.33%
  Test Accuracy: 81.17%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6634161472320557 seconds
 LR changed during epoch: 2.65e-04 -> 2.58e-04
total runtime to train this model was 16.224050283432007 seconds
evaluation in 2.2682693004608154 seconds
  Loss: 0.4432
  Train Accuracy: 84.36%
  Test Accuracy: 81.46%

============================================================
Epoch 28 Summary:
============================================================
Time: 131.31s (Avg member: 26.26s)
Population Mean Accuracy: 80.72%
Best Member Accuracy: 81.46%
Mean Batch Size: 102
Mean Learning Rate: 3.80e-04
Mean Weight Decay: 0.105

============================================================
Epoch 29/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6721882820129395 seconds
 LR changed during epoch: 1.37e-04 -> 1.33e-04
total runtime to train this model was 31.972728967666626 seconds
evaluation in 2.308058023452759 seconds
  Loss: 0.3889
  Train Accuracy: 86.20%
  Test Accuracy: 81.67%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6642329692840576 seconds
 LR changed during epoch: 1.89e-04 -> 1.83e-04
total runtime to train this model was 16.390150785446167 seconds
evaluation in 2.270703077316284 seconds
  Loss: 0.4181
  Train Accuracy: 85.32%
  Test Accuracy: 81.35%

--- Training Member 2 (Batch size: 128) ---
built data in 1.6759157180786133 seconds
 LR changed during epoch: 4.98e-04 -> 6.64e-04
total runtime to train this model was 16.23537588119507 seconds
evaluation in 2.267223358154297 seconds
  Loss: 0.5554
  Train Accuracy: 80.27%
  Test Accuracy: 77.94%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6629128456115723 seconds
 LR changed during epoch: 1.90e-04 -> 1.84e-04
total runtime to train this model was 31.52046513557434 seconds
evaluation in 2.271777391433716 seconds
  Loss: 0.3582
  Train Accuracy: 87.24%
  Test Accuracy: 82.45%

--- Training Member 4 (Batch size: 128) ---
built data in 1.669114112854004 seconds
 LR changed during epoch: 2.58e-04 -> 2.50e-04
total runtime to train this model was 16.399831533432007 seconds
evaluation in 2.2680015563964844 seconds
  Loss: 0.4297
  Train Accuracy: 84.72%
  Test Accuracy: 81.61%

============================================================
Epoch 29 Summary:
============================================================
Time: 132.25s (Avg member: 26.45s)
Population Mean Accuracy: 81.00%
Best Member Accuracy: 82.45%
Mean Batch Size: 102
Mean Learning Rate: 3.80e-04
Mean Weight Decay: 0.105

============================================================
Epoch 30/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.678755283355713 seconds
 LR changed during epoch: 1.33e-04 -> 1.29e-04
total runtime to train this model was 32.622814655303955 seconds
evaluation in 2.283696413040161 seconds
  Loss: 0.3709
  Train Accuracy: 86.82%
  Test Accuracy: 82.59%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6693427562713623 seconds
 LR changed during epoch: 1.83e-04 -> 1.77e-04
total runtime to train this model was 16.06852388381958 seconds
evaluation in 2.2714078426361084 seconds
  Loss: 0.4020
  Train Accuracy: 85.78%
  Test Accuracy: 82.06%

--- Training Member 2 (Batch size: 128) ---
built data in 1.669015884399414 seconds
 LR changed during epoch: 6.64e-04 -> 8.30e-04
total runtime to train this model was 16.372835397720337 seconds
evaluation in 2.2693257331848145 seconds
  Loss: 0.6045
  Train Accuracy: 78.67%
  Test Accuracy: 76.19%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6672430038452148 seconds
 LR changed during epoch: 1.84e-04 -> 1.78e-04
total runtime to train this model was 31.11097025871277 seconds
evaluation in 2.2689523696899414 seconds
  Loss: 0.3336
  Train Accuracy: 88.22%
  Test Accuracy: 81.87%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6610996723175049 seconds
 LR changed during epoch: 2.50e-04 -> 2.42e-04
total runtime to train this model was 16.488349199295044 seconds
evaluation in 2.273048162460327 seconds
  Loss: 0.4090
  Train Accuracy: 85.46%
  Test Accuracy: 81.54%

--- Population Update (Epoch 30) ---

=== PBT Exploit & Explore ===
Truncating 1 members
Top performers: ['82.59%']
Bottom performers: ['76.19%']
Member 2: lr changed from 0.0008296278943550509 to 0.0006419828109556067
Member 2: weight_decay changed from 0.07511673000044625 to 0.09778516979764786
Member 2: drop_path changed from 0.039228501436358774 to 0.06791638403664702
Member 2: batch_size changed from 128 to 256
Member 2 copied from 0
  LR=6.42e-04, WD=0.098, DropPath=0.068, Warmup=5 epochs, Batch=256

============================================================
Epoch 30 Summary:
============================================================
Time: 132.39s (Avg member: 26.48s)
Population Mean Accuracy: 80.85%
Best Member Accuracy: 82.59%
Mean Batch Size: 128
Mean Learning Rate: 3.42e-04
Mean Weight Decay: 0.109

============================================================
Epoch 31/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6812987327575684 seconds
 LR changed during epoch: 1.29e-04 -> 1.24e-04
total runtime to train this model was 34.05906844139099 seconds
evaluation in 2.2973461151123047 seconds
  Loss: 0.3519
  Train Accuracy: 87.67%
  Test Accuracy: 82.33%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6699943542480469 seconds
 LR changed during epoch: 1.77e-04 -> 1.71e-04
total runtime to train this model was 16.26910901069641 seconds
evaluation in 2.275660991668701 seconds
  Loss: 0.3771
  Train Accuracy: 86.65%
  Test Accuracy: 81.46%

--- Training Member 2 (Batch size: 256) ---
built data in 1.677738904953003 seconds
 LR changed during epoch: 6.55e-07 -> 1.29e-04
total runtime to train this model was 10.323107957839966 seconds
evaluation in 2.2669003009796143 seconds
  Loss: 0.2591
  Train Accuracy: 91.02%
  Test Accuracy: 82.86%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6633362770080566 seconds
 LR changed during epoch: 1.78e-04 -> 1.72e-04
total runtime to train this model was 31.544722318649292 seconds
evaluation in 2.273418664932251 seconds
  Loss: 0.3161
  Train Accuracy: 88.81%
  Test Accuracy: 80.90%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6787450313568115 seconds
 LR changed during epoch: 2.42e-04 -> 2.34e-04
total runtime to train this model was 16.19007921218872 seconds
evaluation in 2.2685322761535645 seconds
  Loss: 0.3854
  Train Accuracy: 86.34%
  Test Accuracy: 82.16%

============================================================
Epoch 31 Summary:
============================================================
Time: 128.15s (Avg member: 25.63s)
Population Mean Accuracy: 81.94%
Best Member Accuracy: 82.86%
Mean Batch Size: 128
Mean Learning Rate: 3.42e-04
Mean Weight Decay: 0.109

============================================================
Epoch 32/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6598856449127197 seconds
 LR changed during epoch: 1.24e-04 -> 1.20e-04
total runtime to train this model was 31.98131513595581 seconds
evaluation in 2.275704860687256 seconds
  Loss: 0.3315
  Train Accuracy: 88.37%
  Test Accuracy: 82.03%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6703639030456543 seconds
 LR changed during epoch: 1.71e-04 -> 1.65e-04
total runtime to train this model was 16.27354073524475 seconds
evaluation in 2.270350217819214 seconds
  Loss: 0.3628
  Train Accuracy: 87.15%
  Test Accuracy: 82.63%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6625115871429443 seconds
 LR changed during epoch: 1.29e-04 -> 2.57e-04
total runtime to train this model was 10.271633863449097 seconds
evaluation in 2.2736124992370605 seconds
  Loss: 0.2940
  Train Accuracy: 89.59%
  Test Accuracy: 82.40%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6639001369476318 seconds
 LR changed during epoch: 1.72e-04 -> 1.66e-04
total runtime to train this model was 31.011680364608765 seconds
evaluation in 2.268223762512207 seconds
  Loss: 0.3012
  Train Accuracy: 89.19%
  Test Accuracy: 82.28%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6710219383239746 seconds
 LR changed during epoch: 2.34e-04 -> 2.25e-04
total runtime to train this model was 16.65791082382202 seconds
evaluation in 2.2839515209198 seconds
  Loss: 0.3676
  Train Accuracy: 86.87%
  Test Accuracy: 82.13%

============================================================
Epoch 32 Summary:
============================================================
Time: 125.90s (Avg member: 25.18s)
Population Mean Accuracy: 82.29%
Best Member Accuracy: 82.63%
Mean Batch Size: 128
Mean Learning Rate: 3.42e-04
Mean Weight Decay: 0.109

============================================================
Epoch 33/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.671666145324707 seconds
 LR changed during epoch: 1.20e-04 -> 1.16e-04
total runtime to train this model was 32.243364572525024 seconds
evaluation in 2.276637554168701 seconds
  Loss: 0.3113
  Train Accuracy: 88.82%
  Test Accuracy: 82.43%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6745367050170898 seconds
 LR changed during epoch: 1.65e-04 -> 1.59e-04
total runtime to train this model was 16.588339805603027 seconds
evaluation in 2.2683072090148926 seconds
  Loss: 0.3428
  Train Accuracy: 87.87%
  Test Accuracy: 82.33%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6719708442687988 seconds
 LR changed during epoch: 2.57e-04 -> 3.86e-04
total runtime to train this model was 10.425828456878662 seconds
evaluation in 2.284738063812256 seconds
  Loss: 0.3521
  Train Accuracy: 87.42%
  Test Accuracy: 80.95%

--- Training Member 3 (Batch size: 64) ---
built data in 1.671560287475586 seconds
 LR changed during epoch: 1.66e-04 -> 1.60e-04
total runtime to train this model was 31.649351596832275 seconds
evaluation in 2.2714130878448486 seconds
  Loss: 0.2758
  Train Accuracy: 90.02%
  Test Accuracy: 82.20%

--- Training Member 4 (Batch size: 128) ---
built data in 1.684781551361084 seconds
 LR changed during epoch: 2.25e-04 -> 2.17e-04
total runtime to train this model was 16.035070657730103 seconds
evaluation in 2.265676975250244 seconds
  Loss: 0.3447
  Train Accuracy: 87.68%
  Test Accuracy: 83.41%

============================================================
Epoch 33 Summary:
============================================================
Time: 126.69s (Avg member: 25.34s)
Population Mean Accuracy: 82.26%
Best Member Accuracy: 83.41%
Mean Batch Size: 128
Mean Learning Rate: 3.42e-04
Mean Weight Decay: 0.109

============================================================
Epoch 34/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6612560749053955 seconds
 LR changed during epoch: 1.16e-04 -> 1.11e-04
total runtime to train this model was 31.47807478904724 seconds
evaluation in 2.27103853225708 seconds
  Loss: 0.2926
  Train Accuracy: 89.66%
  Test Accuracy: 83.27%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6730475425720215 seconds
 LR changed during epoch: 1.59e-04 -> 1.53e-04
total runtime to train this model was 16.27542805671692 seconds
evaluation in 2.271942377090454 seconds
  Loss: 0.3256
  Train Accuracy: 88.40%
  Test Accuracy: 82.80%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6637959480285645 seconds
 LR changed during epoch: 3.86e-04 -> 5.14e-04
total runtime to train this model was 10.27018928527832 seconds
evaluation in 2.2729544639587402 seconds
  Loss: 0.4155
  Train Accuracy: 85.11%
  Test Accuracy: 79.77%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6737306118011475 seconds
 LR changed during epoch: 1.60e-04 -> 1.54e-04
total runtime to train this model was 31.288572072982788 seconds
evaluation in 2.2738547325134277 seconds
  Loss: 0.2594
  Train Accuracy: 90.68%
  Test Accuracy: 82.03%

--- Training Member 4 (Batch size: 128) ---
built data in 1.666325569152832 seconds
 LR changed during epoch: 2.17e-04 -> 2.09e-04
total runtime to train this model was 16.467010259628296 seconds
evaluation in 2.275777578353882 seconds
  Loss: 0.3256
  Train Accuracy: 88.24%
  Test Accuracy: 82.59%

============================================================
Epoch 34 Summary:
============================================================
Time: 125.49s (Avg member: 25.10s)
Population Mean Accuracy: 82.09%
Best Member Accuracy: 83.27%
Mean Batch Size: 128
Mean Learning Rate: 3.42e-04
Mean Weight Decay: 0.109

============================================================
Epoch 35/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6712074279785156 seconds
 LR changed during epoch: 1.11e-04 -> 1.07e-04
total runtime to train this model was 32.921406269073486 seconds
evaluation in 2.265042543411255 seconds
  Loss: 0.2769
  Train Accuracy: 90.02%
  Test Accuracy: 82.20%

--- Training Member 1 (Batch size: 128) ---
built data in 1.666632890701294 seconds
 LR changed during epoch: 1.53e-04 -> 1.47e-04
total runtime to train this model was 16.263440370559692 seconds
evaluation in 2.267888069152832 seconds
  Loss: 0.3104
  Train Accuracy: 88.98%
  Test Accuracy: 83.24%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6787567138671875 seconds
 LR changed during epoch: 5.14e-04 -> 6.42e-04
total runtime to train this model was 10.31041669845581 seconds
evaluation in 2.268815279006958 seconds
  Loss: 0.4697
  Train Accuracy: 83.48%
  Test Accuracy: 79.33%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6694235801696777 seconds
 LR changed during epoch: 1.54e-04 -> 1.47e-04
total runtime to train this model was 33.477200746536255 seconds
evaluation in 2.2911250591278076 seconds
  Loss: 0.2366
  Train Accuracy: 91.49%
  Test Accuracy: 82.53%

--- Training Member 4 (Batch size: 128) ---
built data in 1.677842378616333 seconds
 LR changed during epoch: 2.09e-04 -> 2.00e-04
total runtime to train this model was 16.33642292022705 seconds
evaluation in 2.2695095539093018 seconds
  Loss: 0.3116
  Train Accuracy: 88.84%
  Test Accuracy: 83.25%

--- Population Update (Epoch 35) ---

=== PBT Exploit & Explore ===
Truncating 1 members
Top performers: ['83.25%']
Bottom performers: ['79.33%']
Member 2: lr changed from 0.0006419828109556067 to 0.0007175326427869219
Member 2: weight_decay changed from 0.09778516979764786 to 0.1139448443937529
Member 2: drop_path changed from 0.06791638403664702 to 0.07229965851962403
Member 2 copied from 4
  LR=7.18e-04, WD=0.114, DropPath=0.072, Warmup=5 epochs, Batch=256

============================================================
Epoch 35 Summary:
============================================================
Time: 129.05s (Avg member: 25.81s)
Population Mean Accuracy: 82.11%
Best Member Accuracy: 83.25%
Mean Batch Size: 128
Mean Learning Rate: 3.57e-04
Mean Weight Decay: 0.113

============================================================
Epoch 36/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6653242111206055 seconds
 LR changed during epoch: 1.07e-04 -> 1.02e-04
total runtime to train this model was 31.160629510879517 seconds
evaluation in 2.2685348987579346 seconds
  Loss: 0.2588
  Train Accuracy: 90.79%
  Test Accuracy: 83.46%

--- Training Member 1 (Batch size: 128) ---
built data in 1.67692232131958 seconds
 LR changed during epoch: 1.47e-04 -> 1.40e-04
total runtime to train this model was 16.433214902877808 seconds
evaluation in 2.273366689682007 seconds
  Loss: 0.2887
  Train Accuracy: 89.76%
  Test Accuracy: 83.42%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6641829013824463 seconds
 LR changed during epoch: 7.32e-07 -> 1.44e-04
total runtime to train this model was 10.199124574661255 seconds
evaluation in 2.266366481781006 seconds
  Loss: 0.2239
  Train Accuracy: 92.16%
  Test Accuracy: 84.15%

--- Training Member 3 (Batch size: 64) ---
built data in 1.680398941040039 seconds
 LR changed during epoch: 1.47e-04 -> 1.41e-04
total runtime to train this model was 31.0424165725708 seconds
evaluation in 2.267573833465576 seconds
  Loss: 0.2190
  Train Accuracy: 92.17%
  Test Accuracy: 82.80%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6659870147705078 seconds
 LR changed during epoch: 2.00e-04 -> 1.92e-04
total runtime to train this model was 16.125916004180908 seconds
evaluation in 2.2642662525177 seconds
  Loss: 0.2918
  Train Accuracy: 89.43%
  Test Accuracy: 81.90%

============================================================
Epoch 36 Summary:
============================================================
Time: 124.66s (Avg member: 24.93s)
Population Mean Accuracy: 83.15%
Best Member Accuracy: 84.15%
Mean Batch Size: 128
Mean Learning Rate: 3.57e-04
Mean Weight Decay: 0.113

============================================================
Epoch 37/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.673419713973999 seconds
 LR changed during epoch: 1.02e-04 -> 9.75e-05
total runtime to train this model was 32.92106056213379 seconds
evaluation in 2.2855730056762695 seconds
  Loss: 0.2437
  Train Accuracy: 91.30%
  Test Accuracy: 83.39%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6647560596466064 seconds
 LR changed during epoch: 1.40e-04 -> 1.34e-04
total runtime to train this model was 16.028255701065063 seconds
evaluation in 2.26755428314209 seconds
  Loss: 0.2705
  Train Accuracy: 90.50%
  Test Accuracy: 83.53%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6700563430786133 seconds
 LR changed during epoch: 1.44e-04 -> 2.88e-04
total runtime to train this model was 10.37758493423462 seconds
evaluation in 2.2750096321105957 seconds
  Loss: 0.2431
  Train Accuracy: 91.26%
  Test Accuracy: 82.40%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6685590744018555 seconds
 LR changed during epoch: 1.41e-04 -> 1.35e-04
total runtime to train this model was 31.100318431854248 seconds
evaluation in 2.2711191177368164 seconds
  Loss: 0.2049
  Train Accuracy: 92.77%
  Test Accuracy: 83.25%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6794843673706055 seconds
 LR changed during epoch: 1.92e-04 -> 1.83e-04
total runtime to train this model was 16.12989568710327 seconds
evaluation in 2.269958972930908 seconds
  Loss: 0.2681
  Train Accuracy: 90.42%
  Test Accuracy: 83.35%

============================================================
Epoch 37 Summary:
============================================================
Time: 126.29s (Avg member: 25.26s)
Population Mean Accuracy: 83.18%
Best Member Accuracy: 83.53%
Mean Batch Size: 128
Mean Learning Rate: 3.57e-04
Mean Weight Decay: 0.113

============================================================
Epoch 38/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6638422012329102 seconds
 LR changed during epoch: 9.75e-05 -> 9.29e-05
total runtime to train this model was 31.38020348548889 seconds
evaluation in 2.2724010944366455 seconds
  Loss: 0.2236
  Train Accuracy: 91.99%
  Test Accuracy: 83.47%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6695542335510254 seconds
 LR changed during epoch: 1.34e-04 -> 1.28e-04
total runtime to train this model was 16.561021089553833 seconds
evaluation in 2.267585515975952 seconds
  Loss: 0.2599
  Train Accuracy: 90.83%
  Test Accuracy: 83.53%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6635198593139648 seconds
 LR changed during epoch: 2.88e-04 -> 4.31e-04
total runtime to train this model was 10.223396301269531 seconds
evaluation in 2.26941180229187 seconds
  Loss: 0.3052
  Train Accuracy: 89.07%
  Test Accuracy: 81.06%

--- Training Member 3 (Batch size: 64) ---
built data in 1.674414873123169 seconds
 LR changed during epoch: 1.35e-04 -> 1.29e-04
total runtime to train this model was 32.02492094039917 seconds
evaluation in 2.276803731918335 seconds
  Loss: 0.1838
  Train Accuracy: 93.40%
  Test Accuracy: 83.26%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6623129844665527 seconds
 LR changed during epoch: 1.83e-04 -> 1.74e-04
total runtime to train this model was 15.874584436416626 seconds
evaluation in 2.262436866760254 seconds
  Loss: 0.2522
  Train Accuracy: 91.00%
  Test Accuracy: 83.12%

============================================================
Epoch 38 Summary:
============================================================
Time: 125.75s (Avg member: 25.15s)
Population Mean Accuracy: 82.89%
Best Member Accuracy: 83.53%
Mean Batch Size: 128
Mean Learning Rate: 3.57e-04
Mean Weight Decay: 0.113

============================================================
Epoch 39/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6739957332611084 seconds
 LR changed during epoch: 9.29e-05 -> 8.84e-05
total runtime to train this model was 31.222827196121216 seconds
evaluation in 2.2651331424713135 seconds
  Loss: 0.2054
  Train Accuracy: 92.65%
  Test Accuracy: 83.73%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6641731262207031 seconds
 LR changed during epoch: 1.28e-04 -> 1.22e-04
total runtime to train this model was 16.14824867248535 seconds
evaluation in 2.26983904838562 seconds
  Loss: 0.2413
  Train Accuracy: 91.32%
  Test Accuracy: 83.48%

--- Training Member 2 (Batch size: 256) ---
built data in 1.674849271774292 seconds
 LR changed during epoch: 4.31e-04 -> 5.75e-04
total runtime to train this model was 10.174691438674927 seconds
evaluation in 2.269585609436035 seconds
  Loss: 0.3704
  Train Accuracy: 86.82%
  Test Accuracy: 80.21%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6585075855255127 seconds
 LR changed during epoch: 1.29e-04 -> 1.22e-04
total runtime to train this model was 32.139360666275024 seconds
evaluation in 2.281104803085327 seconds
  Loss: 0.1670
  Train Accuracy: 94.07%
  Test Accuracy: 82.45%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6777656078338623 seconds
 LR changed during epoch: 1.74e-04 -> 1.66e-04
total runtime to train this model was 16.01455307006836 seconds
evaluation in 2.2692816257476807 seconds
  Loss: 0.2318
  Train Accuracy: 91.79%
  Test Accuracy: 83.29%

============================================================
Epoch 39 Summary:
============================================================
Time: 125.41s (Avg member: 25.08s)
Population Mean Accuracy: 82.63%
Best Member Accuracy: 83.73%
Mean Batch Size: 128
Mean Learning Rate: 3.57e-04
Mean Weight Decay: 0.113

============================================================
Epoch 40/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6670773029327393 seconds
 LR changed during epoch: 8.84e-05 -> 8.38e-05
total runtime to train this model was 33.027528047561646 seconds
evaluation in 2.2828104496002197 seconds
  Loss: 0.1930
  Train Accuracy: 93.08%
  Test Accuracy: 83.89%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6749837398529053 seconds
 LR changed during epoch: 1.22e-04 -> 1.15e-04
total runtime to train this model was 16.173871994018555 seconds
evaluation in 2.2720606327056885 seconds
  Loss: 0.2245
  Train Accuracy: 91.99%
  Test Accuracy: 83.73%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6639809608459473 seconds
 LR changed during epoch: 5.75e-04 -> 7.18e-04
total runtime to train this model was 10.239006519317627 seconds
evaluation in 2.272907018661499 seconds
  Loss: 0.4304
  Train Accuracy: 84.61%
  Test Accuracy: 78.29%

--- Training Member 3 (Batch size: 64) ---
built data in 1.675938606262207 seconds
 LR changed during epoch: 1.22e-04 -> 1.16e-04
total runtime to train this model was 32.58436989784241 seconds
evaluation in 2.2860422134399414 seconds
  Loss: 0.1599
  Train Accuracy: 94.29%
  Test Accuracy: 82.54%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6782174110412598 seconds
 LR changed during epoch: 1.66e-04 -> 1.57e-04
total runtime to train this model was 16.998916387557983 seconds
evaluation in 2.2709031105041504 seconds
  Loss: 0.2165
  Train Accuracy: 92.39%
  Test Accuracy: 83.29%

--- Population Update (Epoch 40) ---

=== PBT Exploit & Explore ===
Truncating 1 members
Top performers: ['83.89%']
Bottom performers: ['78.29%']
Member 2: lr changed from 0.0007175326427869219 to 0.0010000000000000002
Member 2: weight_decay changed from 0.1139448443937529 to 0.13198697453619637
Member 2: drop_path changed from 0.07229965851962403 to 0.09807511148608788
Member 2: batch_size changed from 256 to 128
Member 2 copied from 0
  LR=1.00e-03, WD=0.132, DropPath=0.098, Warmup=5 epochs, Batch=128

============================================================
Epoch 40 Summary:
============================================================
Time: 128.78s (Avg member: 25.75s)
Population Mean Accuracy: 82.35%
Best Member Accuracy: 83.89%
Mean Batch Size: 102
Mean Learning Rate: 4.14e-04
Mean Weight Decay: 0.116

============================================================
Epoch 41/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.675346851348877 seconds
 LR changed during epoch: 8.38e-05 -> 7.93e-05
total runtime to train this model was 32.57158637046814 seconds
evaluation in 2.2753634452819824 seconds
  Loss: 0.1785
  Train Accuracy: 93.64%
  Test Accuracy: 83.46%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6646037101745605 seconds
 LR changed during epoch: 1.15e-04 -> 1.09e-04
total runtime to train this model was 16.432903051376343 seconds
evaluation in 2.2853035926818848 seconds
  Loss: 0.2072
  Train Accuracy: 92.68%
  Test Accuracy: 83.29%

--- Training Member 2 (Batch size: 128) ---
built data in 1.6679022312164307 seconds
 LR changed during epoch: 5.12e-07 -> 2.01e-04
total runtime to train this model was 16.18771243095398 seconds
evaluation in 2.2705860137939453 seconds
  Loss: 0.1701
  Train Accuracy: 94.04%
  Test Accuracy: 82.61%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6784112453460693 seconds
 LR changed during epoch: 1.16e-04 -> 1.10e-04
total runtime to train this model was 31.89769220352173 seconds
evaluation in 2.276397228240967 seconds
  Loss: 0.1449
  Train Accuracy: 94.83%
  Test Accuracy: 82.72%

--- Training Member 4 (Batch size: 128) ---
built data in 1.678924322128296 seconds
 LR changed during epoch: 1.57e-04 -> 1.49e-04
total runtime to train this model was 15.9990816116333 seconds
evaluation in 2.2678561210632324 seconds
  Loss: 0.1984
  Train Accuracy: 92.92%
  Test Accuracy: 83.65%

============================================================
Epoch 41 Summary:
============================================================
Time: 132.84s (Avg member: 26.57s)
Population Mean Accuracy: 83.15%
Best Member Accuracy: 83.65%
Mean Batch Size: 102
Mean Learning Rate: 4.14e-04
Mean Weight Decay: 0.116

============================================================
Epoch 42/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6623268127441406 seconds
 LR changed during epoch: 7.93e-05 -> 7.49e-05
total runtime to train this model was 33.59446740150452 seconds
evaluation in 2.2818665504455566 seconds
  Loss: 0.1667
  Train Accuracy: 94.08%
  Test Accuracy: 83.97%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6736087799072266 seconds
 LR changed during epoch: 1.09e-04 -> 1.03e-04
total runtime to train this model was 16.839431047439575 seconds
evaluation in 2.2669107913970947 seconds
  Loss: 0.1919
  Train Accuracy: 93.12%
  Test Accuracy: 83.77%

--- Training Member 2 (Batch size: 128) ---
built data in 1.6620447635650635 seconds
 LR changed during epoch: 2.01e-04 -> 4.01e-04
total runtime to train this model was 16.257524013519287 seconds
evaluation in 2.2851803302764893 seconds
  Loss: 0.3304
  Train Accuracy: 88.15%
  Test Accuracy: 79.97%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6722204685211182 seconds
 LR changed during epoch: 1.10e-04 -> 1.03e-04
total runtime to train this model was 32.90961527824402 seconds
evaluation in 2.268660545349121 seconds
  Loss: 0.1314
  Train Accuracy: 95.31%
  Test Accuracy: 83.48%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6623141765594482 seconds
 LR changed during epoch: 1.49e-04 -> 1.40e-04
total runtime to train this model was 16.195253372192383 seconds
evaluation in 2.292001962661743 seconds
  Loss: 0.1904
  Train Accuracy: 93.18%
  Test Accuracy: 83.60%

============================================================
Epoch 42 Summary:
============================================================
Time: 135.53s (Avg member: 27.11s)
Population Mean Accuracy: 82.96%
Best Member Accuracy: 83.97%
Mean Batch Size: 102
Mean Learning Rate: 4.14e-04
Mean Weight Decay: 0.116

============================================================
Epoch 43/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.676548957824707 seconds
 LR changed during epoch: 7.49e-05 -> 7.05e-05
total runtime to train this model was 31.971688985824585 seconds
evaluation in 2.2702999114990234 seconds
  Loss: 0.1573
  Train Accuracy: 94.42%
  Test Accuracy: 83.81%

--- Training Member 1 (Batch size: 128) ---
built data in 1.662564754486084 seconds
 LR changed during epoch: 1.03e-04 -> 9.68e-05
total runtime to train this model was 16.3909969329834 seconds
evaluation in 2.288149118423462 seconds
  Loss: 0.1772
  Train Accuracy: 93.62%
  Test Accuracy: 84.11%

--- Training Member 2 (Batch size: 128) ---
built data in 1.6855473518371582 seconds
 LR changed during epoch: 4.01e-04 -> 6.01e-04
total runtime to train this model was 17.163408994674683 seconds
evaluation in 2.272740125656128 seconds
  Loss: 0.4780
  Train Accuracy: 83.13%
  Test Accuracy: 77.32%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6720590591430664 seconds
 LR changed during epoch: 1.03e-04 -> 9.74e-05
total runtime to train this model was 31.589037656784058 seconds
evaluation in 2.27640700340271 seconds
  Loss: 0.1153
  Train Accuracy: 95.89%
  Test Accuracy: 82.58%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6683967113494873 seconds
 LR changed during epoch: 1.40e-04 -> 1.32e-04
total runtime to train this model was 16.20210599899292 seconds
evaluation in 2.269805908203125 seconds
  Loss: 0.1724
  Train Accuracy: 93.77%
  Test Accuracy: 84.29%

============================================================
Epoch 43 Summary:
============================================================
Time: 133.07s (Avg member: 26.61s)
Population Mean Accuracy: 82.42%
Best Member Accuracy: 84.29%
Mean Batch Size: 102
Mean Learning Rate: 4.14e-04
Mean Weight Decay: 0.116

============================================================
Epoch 44/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.676927089691162 seconds
 LR changed during epoch: 7.05e-05 -> 6.61e-05
total runtime to train this model was 31.520426511764526 seconds
evaluation in 2.2746145725250244 seconds
  Loss: 0.1410
  Train Accuracy: 95.01%
  Test Accuracy: 83.88%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6836178302764893 seconds
 LR changed during epoch: 9.68e-05 -> 9.08e-05
total runtime to train this model was 16.67186141014099 seconds
evaluation in 2.279379367828369 seconds
  Loss: 0.1691
  Train Accuracy: 94.02%
  Test Accuracy: 84.09%

--- Training Member 2 (Batch size: 128) ---
built data in 1.6593494415283203 seconds
 LR changed during epoch: 6.01e-04 -> 8.01e-04
total runtime to train this model was 16.373435258865356 seconds
evaluation in 2.2669169902801514 seconds
  Loss: 0.5776
  Train Accuracy: 79.75%
  Test Accuracy: 75.39%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6760971546173096 seconds
 LR changed during epoch: 9.74e-05 -> 9.13e-05
total runtime to train this model was 31.36318826675415 seconds
evaluation in 2.2753353118896484 seconds
  Loss: 0.1092
  Train Accuracy: 96.10%
  Test Accuracy: 83.47%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6649322509765625 seconds
 LR changed during epoch: 1.32e-04 -> 1.24e-04
total runtime to train this model was 16.668949127197266 seconds
evaluation in 2.268742799758911 seconds
  Loss: 0.1578
  Train Accuracy: 94.39%
  Test Accuracy: 84.01%

============================================================
Epoch 44 Summary:
============================================================
Time: 132.33s (Avg member: 26.47s)
Population Mean Accuracy: 82.17%
Best Member Accuracy: 84.09%
Mean Batch Size: 102
Mean Learning Rate: 4.14e-04
Mean Weight Decay: 0.116

============================================================
Epoch 45/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6732738018035889 seconds
 LR changed during epoch: 6.61e-05 -> 6.18e-05
total runtime to train this model was 32.413628339767456 seconds
evaluation in 2.266857385635376 seconds
  Loss: 0.1299
  Train Accuracy: 95.49%
  Test Accuracy: 83.87%

--- Training Member 1 (Batch size: 128) ---
built data in 1.669098138809204 seconds
 LR changed during epoch: 9.08e-05 -> 8.49e-05
total runtime to train this model was 17.665014028549194 seconds
evaluation in 2.2664954662323 seconds
  Loss: 0.1538
  Train Accuracy: 94.59%
  Test Accuracy: 84.26%

--- Training Member 2 (Batch size: 128) ---
built data in 1.6727516651153564 seconds
 LR changed during epoch: 8.01e-04 -> 1.00e-03
total runtime to train this model was 16.53830909729004 seconds
evaluation in 2.2746522426605225 seconds
  Loss: 0.6365
  Train Accuracy: 77.67%
  Test Accuracy: 75.73%

--- Training Member 3 (Batch size: 64) ---
built data in 1.672792673110962 seconds
 LR changed during epoch: 9.13e-05 -> 8.53e-05
total runtime to train this model was 32.81889533996582 seconds
evaluation in 2.274895191192627 seconds
  Loss: 0.0957
  Train Accuracy: 96.68%
  Test Accuracy: 82.90%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6757442951202393 seconds
 LR changed during epoch: 1.24e-04 -> 1.16e-04
total runtime to train this model was 16.450681924819946 seconds
evaluation in 2.2773361206054688 seconds
  Loss: 0.1468
  Train Accuracy: 94.77%
  Test Accuracy: 84.42%

--- Population Update (Epoch 45) ---

=== PBT Exploit & Explore ===
Truncating 1 members
Top performers: ['84.42%']
Bottom performers: ['75.73%']
Member 2: lr changed from 0.0010000000000000002 to 0.0006744623384529109
Member 2: weight_decay changed from 0.13198697453619637 to 0.13792323934182965
Member 2: drop_path changed from 0.09807511148608788 to 0.060223015927463604
Member 2: batch_size changed from 128 to 256
Member 2 copied from 4
  LR=6.74e-04, WD=0.138, DropPath=0.060, Warmup=5 epochs, Batch=256

============================================================
Epoch 45 Summary:
============================================================
Time: 135.62s (Avg member: 27.12s)
Population Mean Accuracy: 82.24%
Best Member Accuracy: 84.42%
Mean Batch Size: 128
Mean Learning Rate: 3.49e-04
Mean Weight Decay: 0.117

============================================================
Epoch 46/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6638743877410889 seconds
 LR changed during epoch: 6.18e-05 -> 5.76e-05
total runtime to train this model was 31.81214165687561 seconds
evaluation in 2.2986831665039062 seconds
  Loss: 0.1214
  Train Accuracy: 95.70%
  Test Accuracy: 83.76%

--- Training Member 1 (Batch size: 128) ---
built data in 1.673321008682251 seconds
 LR changed during epoch: 8.49e-05 -> 7.91e-05
total runtime to train this model was 17.09327244758606 seconds
evaluation in 2.2847580909729004 seconds
  Loss: 0.1407
  Train Accuracy: 95.01%
  Test Accuracy: 84.66%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6662883758544922 seconds
 LR changed during epoch: 6.88e-07 -> 1.36e-04
total runtime to train this model was 10.222801685333252 seconds
evaluation in 2.2680294513702393 seconds
  Loss: 0.0977
  Train Accuracy: 96.71%
  Test Accuracy: 84.17%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6743404865264893 seconds
 LR changed during epoch: 8.53e-05 -> 7.95e-05
total runtime to train this model was 31.69837522506714 seconds
evaluation in 2.269310712814331 seconds
  Loss: 0.0890
  Train Accuracy: 96.90%
  Test Accuracy: 83.50%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6659519672393799 seconds
 LR changed during epoch: 1.16e-04 -> 1.08e-04
total runtime to train this model was 16.324791193008423 seconds
evaluation in 2.2711293697357178 seconds
  Loss: 0.1300
  Train Accuracy: 95.42%
  Test Accuracy: 83.65%

============================================================
Epoch 46 Summary:
============================================================
Time: 126.89s (Avg member: 25.38s)
Population Mean Accuracy: 83.95%
Best Member Accuracy: 84.66%
Mean Batch Size: 128
Mean Learning Rate: 3.49e-04
Mean Weight Decay: 0.117

============================================================
Epoch 47/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6723301410675049 seconds
 LR changed during epoch: 5.76e-05 -> 5.34e-05
total runtime to train this model was 31.798215866088867 seconds
evaluation in 2.273556709289551 seconds
  Loss: 0.1082
  Train Accuracy: 96.19%
  Test Accuracy: 84.29%

--- Training Member 1 (Batch size: 128) ---
built data in 1.664891004562378 seconds
 LR changed during epoch: 7.91e-05 -> 7.34e-05
total runtime to train this model was 16.32569670677185 seconds
evaluation in 2.27300763130188 seconds
  Loss: 0.1269
  Train Accuracy: 95.54%
  Test Accuracy: 84.55%

--- Training Member 2 (Batch size: 256) ---
built data in 1.666797161102295 seconds
 LR changed during epoch: 1.36e-04 -> 2.70e-04
total runtime to train this model was 10.287009716033936 seconds
evaluation in 2.2777297496795654 seconds
  Loss: 0.1504
  Train Accuracy: 94.66%
  Test Accuracy: 83.34%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6762440204620361 seconds
 LR changed during epoch: 7.95e-05 -> 7.38e-05
total runtime to train this model was 32.664501905441284 seconds
evaluation in 2.2757527828216553 seconds
  Loss: 0.0787
  Train Accuracy: 97.26%
  Test Accuracy: 83.80%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6762721538543701 seconds
 LR changed during epoch: 1.08e-04 -> 1.00e-04
total runtime to train this model was 16.953142881393433 seconds
evaluation in 2.2708611488342285 seconds
  Loss: 0.1220
  Train Accuracy: 95.68%
  Test Accuracy: 84.09%

============================================================
Epoch 47 Summary:
============================================================
Time: 127.76s (Avg member: 25.55s)
Population Mean Accuracy: 84.01%
Best Member Accuracy: 84.55%
Mean Batch Size: 128
Mean Learning Rate: 3.49e-04
Mean Weight Decay: 0.117

============================================================
Epoch 48/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.672229290008545 seconds
 LR changed during epoch: 5.34e-05 -> 4.94e-05
total runtime to train this model was 31.51785182952881 seconds
evaluation in 2.270996332168579 seconds
  Loss: 0.1015
  Train Accuracy: 96.44%
  Test Accuracy: 84.61%

--- Training Member 1 (Batch size: 128) ---
built data in 1.682084321975708 seconds
 LR changed during epoch: 7.34e-05 -> 6.78e-05
total runtime to train this model was 16.5127592086792 seconds
evaluation in 2.2793710231781006 seconds
  Loss: 0.1204
  Train Accuracy: 95.63%
  Test Accuracy: 84.71%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6689097881317139 seconds
 LR changed during epoch: 2.70e-04 -> 4.05e-04
total runtime to train this model was 10.300434827804565 seconds
evaluation in 2.2754526138305664 seconds
  Loss: 0.2280
  Train Accuracy: 91.72%
  Test Accuracy: 81.50%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6748039722442627 seconds
 LR changed during epoch: 7.38e-05 -> 6.82e-05
total runtime to train this model was 32.34441614151001 seconds
evaluation in 2.29202938079834 seconds
  Loss: 0.0733
  Train Accuracy: 97.44%
  Test Accuracy: 83.84%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6631064414978027 seconds
 LR changed during epoch: 1.00e-04 -> 9.24e-05
total runtime to train this model was 16.22152066230774 seconds
evaluation in 2.267552375793457 seconds
  Loss: 0.1080
  Train Accuracy: 96.25%
  Test Accuracy: 84.09%

============================================================
Epoch 48 Summary:
============================================================
Time: 126.65s (Avg member: 25.33s)
Population Mean Accuracy: 83.75%
Best Member Accuracy: 84.71%
Mean Batch Size: 128
Mean Learning Rate: 3.49e-04
Mean Weight Decay: 0.117

============================================================
Epoch 49/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6724107265472412 seconds
 LR changed during epoch: 4.94e-05 -> 4.55e-05
total runtime to train this model was 31.301825761795044 seconds
evaluation in 2.2756001949310303 seconds
  Loss: 0.0943
  Train Accuracy: 96.67%
  Test Accuracy: 84.12%

--- Training Member 1 (Batch size: 128) ---
built data in 1.672558307647705 seconds
 LR changed during epoch: 6.78e-05 -> 6.24e-05
total runtime to train this model was 16.588075637817383 seconds
evaluation in 2.268965482711792 seconds
  Loss: 0.1069
  Train Accuracy: 96.29%
  Test Accuracy: 84.72%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6723432540893555 seconds
 LR changed during epoch: 4.05e-04 -> 5.40e-04
total runtime to train this model was 10.194839715957642 seconds
evaluation in 2.273061752319336 seconds
  Loss: 0.3002
  Train Accuracy: 89.19%
  Test Accuracy: 81.01%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6652288436889648 seconds
 LR changed during epoch: 6.82e-05 -> 6.27e-05
total runtime to train this model was 31.406817197799683 seconds
evaluation in 2.2682037353515625 seconds
  Loss: 0.0658
  Train Accuracy: 97.68%
  Test Accuracy: 83.83%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6738314628601074 seconds
 LR changed during epoch: 9.24e-05 -> 8.49e-05
total runtime to train this model was 16.028738021850586 seconds
evaluation in 2.2682249546051025 seconds
  Loss: 0.1016
  Train Accuracy: 96.42%
  Test Accuracy: 84.18%

============================================================
Epoch 49 Summary:
============================================================
Time: 125.24s (Avg member: 25.05s)
Population Mean Accuracy: 83.57%
Best Member Accuracy: 84.72%
Mean Batch Size: 128
Mean Learning Rate: 3.49e-04
Mean Weight Decay: 0.117

============================================================
Epoch 50/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6684069633483887 seconds
 LR changed during epoch: 4.55e-05 -> 4.17e-05
total runtime to train this model was 31.203856468200684 seconds
evaluation in 2.2690751552581787 seconds
  Loss: 0.0824
  Train Accuracy: 97.17%
  Test Accuracy: 84.32%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6763761043548584 seconds
 LR changed during epoch: 6.24e-05 -> 5.71e-05
total runtime to train this model was 16.783685207366943 seconds
evaluation in 2.2774946689605713 seconds
  Loss: 0.0988
  Train Accuracy: 96.52%
  Test Accuracy: 84.39%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6756534576416016 seconds
 LR changed during epoch: 5.40e-04 -> 6.74e-04
total runtime to train this model was 10.355018377304077 seconds
evaluation in 2.2666993141174316 seconds
  Loss: 0.3522
  Train Accuracy: 87.43%
  Test Accuracy: 79.68%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6791119575500488 seconds
 LR changed during epoch: 6.27e-05 -> 5.74e-05
total runtime to train this model was 31.760257959365845 seconds
evaluation in 2.2731568813323975 seconds
  Loss: 0.0582
  Train Accuracy: 97.97%
  Test Accuracy: 83.40%

--- Training Member 4 (Batch size: 128) ---
built data in 1.664435625076294 seconds
 LR changed during epoch: 8.49e-05 -> 7.78e-05
total runtime to train this model was 16.42550754547119 seconds
evaluation in 2.273038148880005 seconds
  Loss: 0.0925
  Train Accuracy: 96.75%
  Test Accuracy: 83.91%

--- Population Update (Epoch 50) ---

=== PBT Exploit & Explore ===
Truncating 1 members
Top performers: ['84.39%']
Bottom performers: ['79.68%']
Member 2: lr changed from 0.0006744623384529109 to 0.0007854595717165308
Member 2: weight_decay changed from 0.13792323934182965 to 0.1287335151445513
Member 2: drop_path changed from 0.060223015927463604 to 0.023336061455978968
Member 2 copied from 1
  LR=7.85e-04, WD=0.129, DropPath=0.023, Warmup=5 epochs, Batch=256

============================================================
Epoch 50 Summary:
============================================================
Time: 126.27s (Avg member: 25.25s)
Population Mean Accuracy: 83.14%
Best Member Accuracy: 84.39%
Mean Batch Size: 128
Mean Learning Rate: 3.71e-04
Mean Weight Decay: 0.116

============================================================
Epoch 51/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6772468090057373 seconds
 LR changed during epoch: 4.17e-05 -> 3.80e-05
total runtime to train this model was 33.10850715637207 seconds
evaluation in 2.2846755981445312 seconds
  Loss: 0.0775
  Train Accuracy: 97.40%
  Test Accuracy: 84.19%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6610288619995117 seconds
 LR changed during epoch: 5.71e-05 -> 5.21e-05
total runtime to train this model was 16.105116367340088 seconds
evaluation in 2.2790563106536865 seconds
  Loss: 0.0934
  Train Accuracy: 96.73%
  Test Accuracy: 84.71%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6672563552856445 seconds
 LR changed during epoch: 8.01e-07 -> 1.58e-04
total runtime to train this model was 10.244332075119019 seconds
evaluation in 2.277054786682129 seconds
  Loss: 0.0882
  Train Accuracy: 96.90%
  Test Accuracy: 83.53%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6681163311004639 seconds
 LR changed during epoch: 5.74e-05 -> 5.23e-05
total runtime to train this model was 32.222678661346436 seconds
evaluation in 2.272906541824341 seconds
  Loss: 0.0523
  Train Accuracy: 98.21%
  Test Accuracy: 84.15%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6740167140960693 seconds
 LR changed during epoch: 7.78e-05 -> 7.08e-05
total runtime to train this model was 16.201526165008545 seconds
evaluation in 2.278499126434326 seconds
  Loss: 0.0791
  Train Accuracy: 97.24%
  Test Accuracy: 84.43%

============================================================
Epoch 51 Summary:
============================================================
Time: 127.63s (Avg member: 25.53s)
Population Mean Accuracy: 84.20%
Best Member Accuracy: 84.71%
Mean Batch Size: 128
Mean Learning Rate: 3.71e-04
Mean Weight Decay: 0.116

============================================================
Epoch 52/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6631271839141846 seconds
 LR changed during epoch: 3.80e-05 -> 3.45e-05
total runtime to train this model was 31.703805208206177 seconds
evaluation in 2.2793948650360107 seconds
  Loss: 0.0746
  Train Accuracy: 97.44%
  Test Accuracy: 84.37%

--- Training Member 1 (Batch size: 128) ---
built data in 1.685225009918213 seconds
 LR changed during epoch: 5.21e-05 -> 4.72e-05
total runtime to train this model was 16.843475103378296 seconds
evaluation in 2.2663228511810303 seconds
  Loss: 0.0865
  Train Accuracy: 97.01%
  Test Accuracy: 84.67%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6641430854797363 seconds
 LR changed during epoch: 1.58e-04 -> 3.15e-04
total runtime to train this model was 10.18419361114502 seconds
evaluation in 2.2745492458343506 seconds
  Loss: 0.2036
  Train Accuracy: 92.79%
  Test Accuracy: 81.74%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6730327606201172 seconds
 LR changed during epoch: 5.23e-05 -> 4.74e-05
total runtime to train this model was 31.57998490333557 seconds
evaluation in 2.2690696716308594 seconds
  Loss: 0.0436
  Train Accuracy: 98.49%
  Test Accuracy: 84.16%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6609890460968018 seconds
 LR changed during epoch: 7.08e-05 -> 6.41e-05
total runtime to train this model was 16.347296476364136 seconds
evaluation in 2.2707693576812744 seconds
  Loss: 0.0752
  Train Accuracy: 97.46%
  Test Accuracy: 84.59%

============================================================
Epoch 52 Summary:
============================================================
Time: 126.37s (Avg member: 25.27s)
Population Mean Accuracy: 83.91%
Best Member Accuracy: 84.67%
Mean Batch Size: 128
Mean Learning Rate: 3.71e-04
Mean Weight Decay: 0.116

============================================================
Epoch 53/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6754100322723389 seconds
 LR changed during epoch: 3.45e-05 -> 3.10e-05
total runtime to train this model was 31.787174463272095 seconds
evaluation in 2.2715039253234863 seconds
  Loss: 0.0634
  Train Accuracy: 97.79%
  Test Accuracy: 83.95%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6688172817230225 seconds
 LR changed during epoch: 4.72e-05 -> 4.25e-05
total runtime to train this model was 17.345541954040527 seconds
evaluation in 2.2711071968078613 seconds
  Loss: 0.0782
  Train Accuracy: 97.34%
  Test Accuracy: 84.96%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6701958179473877 seconds
 LR changed during epoch: 3.15e-04 -> 4.72e-04
total runtime to train this model was 10.205211400985718 seconds
evaluation in 2.273494005203247 seconds
  Loss: 0.3049
  Train Accuracy: 89.15%
  Test Accuracy: 79.66%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6645138263702393 seconds
 LR changed during epoch: 4.74e-05 -> 4.27e-05
total runtime to train this model was 31.292819261550903 seconds
evaluation in 2.2720608711242676 seconds
  Loss: 0.0428
  Train Accuracy: 98.54%
  Test Accuracy: 84.10%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6817331314086914 seconds
 LR changed during epoch: 6.41e-05 -> 5.77e-05
total runtime to train this model was 16.692131757736206 seconds
evaluation in 2.2690632343292236 seconds
  Loss: 0.0684
  Train Accuracy: 97.60%
  Test Accuracy: 84.39%

============================================================
Epoch 53 Summary:
============================================================
Time: 127.05s (Avg member: 25.41s)
Population Mean Accuracy: 83.41%
Best Member Accuracy: 84.96%
Mean Batch Size: 128
Mean Learning Rate: 3.71e-04
Mean Weight Decay: 0.116

============================================================
Epoch 54/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6645488739013672 seconds
 LR changed during epoch: 3.10e-05 -> 2.78e-05
total runtime to train this model was 31.304410696029663 seconds
evaluation in 2.2809982299804688 seconds
  Loss: 0.0594
  Train Accuracy: 97.98%
  Test Accuracy: 84.65%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6742761135101318 seconds
 LR changed during epoch: 4.25e-05 -> 3.80e-05
total runtime to train this model was 16.38479447364807 seconds
evaluation in 2.2704038619995117 seconds
  Loss: 0.0697
  Train Accuracy: 97.64%
  Test Accuracy: 84.69%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6708950996398926 seconds
 LR changed during epoch: 4.72e-04 -> 6.29e-04
total runtime to train this model was 10.300543785095215 seconds
evaluation in 2.274474859237671 seconds
  Loss: 0.3817
  Train Accuracy: 86.47%
  Test Accuracy: 78.52%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6728911399841309 seconds
 LR changed during epoch: 4.27e-05 -> 3.82e-05
total runtime to train this model was 31.641669750213623 seconds
evaluation in 2.26916241645813 seconds
  Loss: 0.0353
  Train Accuracy: 98.82%
  Test Accuracy: 83.90%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6580440998077393 seconds
 LR changed during epoch: 5.77e-05 -> 5.15e-05
total runtime to train this model was 16.08648991584778 seconds
evaluation in 2.2692580223083496 seconds
  Loss: 0.0611
  Train Accuracy: 97.88%
  Test Accuracy: 84.37%

============================================================
Epoch 54 Summary:
============================================================
Time: 125.43s (Avg member: 25.09s)
Population Mean Accuracy: 83.23%
Best Member Accuracy: 84.69%
Mean Batch Size: 128
Mean Learning Rate: 3.71e-04
Mean Weight Decay: 0.116

============================================================
Epoch 55/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6721599102020264 seconds
 LR changed during epoch: 2.78e-05 -> 2.47e-05
total runtime to train this model was 33.36411452293396 seconds
evaluation in 2.2785837650299072 seconds
  Loss: 0.0545
  Train Accuracy: 98.16%
  Test Accuracy: 84.76%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6678216457366943 seconds
 LR changed during epoch: 3.80e-05 -> 3.37e-05
total runtime to train this model was 16.194202661514282 seconds
evaluation in 2.2699472904205322 seconds
  Loss: 0.0652
  Train Accuracy: 97.81%
  Test Accuracy: 84.97%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6686985492706299 seconds
 LR changed during epoch: 6.29e-04 -> 7.85e-04
total runtime to train this model was 10.34684705734253 seconds
evaluation in 2.275561571121216 seconds
  Loss: 0.4428
  Train Accuracy: 84.29%
  Test Accuracy: 78.79%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6622450351715088 seconds
 LR changed during epoch: 3.82e-05 -> 3.39e-05
total runtime to train this model was 31.824878931045532 seconds
evaluation in 2.2680745124816895 seconds
  Loss: 0.0351
  Train Accuracy: 98.84%
  Test Accuracy: 84.02%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6760199069976807 seconds
 LR changed during epoch: 5.15e-05 -> 4.57e-05
total runtime to train this model was 16.3913676738739 seconds
evaluation in 2.273221254348755 seconds
  Loss: 0.0575
  Train Accuracy: 98.06%
  Test Accuracy: 84.67%

--- Population Update (Epoch 55) ---

=== PBT Exploit & Explore ===
Truncating 1 members
Top performers: ['84.97%']
Bottom performers: ['78.79%']
Member 2: lr changed from 0.0007854595717165308 to 0.0009670895363993511
Member 2: weight_decay changed from 0.1287335151445513 to 0.11233071279526949
Member 2: drop_path changed from 0.023336061455978968 to 0.04011951119511094
Member 2 copied from 1
  LR=9.67e-04, WD=0.112, DropPath=0.040, Warmup=5 epochs, Batch=256

============================================================
Epoch 55 Summary:
============================================================
Time: 127.85s (Avg member: 25.57s)
Population Mean Accuracy: 83.44%
Best Member Accuracy: 84.97%
Mean Batch Size: 128
Mean Learning Rate: 4.07e-04
Mean Weight Decay: 0.112

============================================================
Epoch 56/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6591517925262451 seconds
 LR changed during epoch: 2.47e-05 -> 2.18e-05
total runtime to train this model was 32.013678789138794 seconds
evaluation in 2.3023266792297363 seconds
  Loss: 0.0503
  Train Accuracy: 98.26%
  Test Accuracy: 84.57%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6757562160491943 seconds
 LR changed during epoch: 3.37e-05 -> 2.96e-05
total runtime to train this model was 16.286813259124756 seconds
evaluation in 2.272331953048706 seconds
  Loss: 0.0582
  Train Accuracy: 97.98%
  Test Accuracy: 85.04%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6691279411315918 seconds
 LR changed during epoch: 9.87e-07 -> 1.94e-04
total runtime to train this model was 10.253398656845093 seconds
evaluation in 2.2699997425079346 seconds
  Loss: 0.0859
  Train Accuracy: 97.00%
  Test Accuracy: 83.16%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6703221797943115 seconds
 LR changed during epoch: 3.39e-05 -> 2.98e-05
total runtime to train this model was 31.086747884750366 seconds
evaluation in 2.274352550506592 seconds
  Loss: 0.0282
  Train Accuracy: 99.06%
  Test Accuracy: 84.35%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6645500659942627 seconds
 LR changed during epoch: 4.57e-05 -> 4.02e-05
total runtime to train this model was 16.15811562538147 seconds
evaluation in 2.270793914794922 seconds
  Loss: 0.0493
  Train Accuracy: 98.29%
  Test Accuracy: 84.58%

============================================================
Epoch 56 Summary:
============================================================
Time: 125.53s (Avg member: 25.11s)
Population Mean Accuracy: 84.34%
Best Member Accuracy: 85.04%
Mean Batch Size: 128
Mean Learning Rate: 4.07e-04
Mean Weight Decay: 0.112

============================================================
Epoch 57/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6654486656188965 seconds
 LR changed during epoch: 2.18e-05 -> 1.90e-05
total runtime to train this model was 31.384897470474243 seconds
evaluation in 2.271148920059204 seconds
  Loss: 0.0449
  Train Accuracy: 98.47%
  Test Accuracy: 84.74%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6595253944396973 seconds
 LR changed during epoch: 2.96e-05 -> 2.58e-05
total runtime to train this model was 16.74617075920105 seconds
evaluation in 2.269596576690674 seconds
  Loss: 0.0532
  Train Accuracy: 98.22%
  Test Accuracy: 85.17%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6736552715301514 seconds
 LR changed during epoch: 1.94e-04 -> 3.88e-04
total runtime to train this model was 10.249165773391724 seconds
evaluation in 2.2712531089782715 seconds
  Loss: 0.2290
  Train Accuracy: 92.02%
  Test Accuracy: 80.94%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6656379699707031 seconds
 LR changed during epoch: 2.98e-05 -> 2.60e-05
total runtime to train this model was 33.83391451835632 seconds
evaluation in 2.271517753601074 seconds
  Loss: 0.0252
  Train Accuracy: 99.20%
  Test Accuracy: 84.67%

--- Training Member 4 (Batch size: 128) ---
built data in 1.665900707244873 seconds
 LR changed during epoch: 4.02e-05 -> 3.49e-05
total runtime to train this model was 16.81038737297058 seconds
evaluation in 2.2816083431243896 seconds
  Loss: 0.0450
  Train Accuracy: 98.52%
  Test Accuracy: 84.72%

============================================================
Epoch 57 Summary:
============================================================
Time: 128.73s (Avg member: 25.75s)
Population Mean Accuracy: 84.05%
Best Member Accuracy: 85.17%
Mean Batch Size: 128
Mean Learning Rate: 4.07e-04
Mean Weight Decay: 0.112

============================================================
Epoch 58/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6672625541687012 seconds
 LR changed during epoch: 1.90e-05 -> 1.64e-05
total runtime to train this model was 34.22674226760864 seconds
evaluation in 2.2855000495910645 seconds
  Loss: 0.0422
  Train Accuracy: 98.60%
  Test Accuracy: 84.46%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6763615608215332 seconds
 LR changed during epoch: 2.58e-05 -> 2.23e-05
total runtime to train this model was 16.31519603729248 seconds
evaluation in 2.271622896194458 seconds
  Loss: 0.0518
  Train Accuracy: 98.25%
  Test Accuracy: 85.04%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6743147373199463 seconds
 LR changed during epoch: 3.88e-04 -> 5.81e-04
total runtime to train this model was 10.173719882965088 seconds
evaluation in 2.2731435298919678 seconds
  Loss: 0.3464
  Train Accuracy: 87.72%
  Test Accuracy: 78.53%

--- Training Member 3 (Batch size: 64) ---
built data in 1.675987720489502 seconds
 LR changed during epoch: 2.60e-05 -> 2.24e-05
total runtime to train this model was 32.187243700027466 seconds
evaluation in 2.302180528640747 seconds
  Loss: 0.0240
  Train Accuracy: 99.20%
  Test Accuracy: 84.43%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6723780632019043 seconds
 LR changed during epoch: 3.49e-05 -> 3.01e-05
total runtime to train this model was 16.277977228164673 seconds
evaluation in 2.2744550704956055 seconds
  Loss: 0.0403
  Train Accuracy: 98.62%
  Test Accuracy: 85.03%

============================================================
Epoch 58 Summary:
============================================================
Time: 128.96s (Avg member: 25.79s)
Population Mean Accuracy: 83.50%
Best Member Accuracy: 85.04%
Mean Batch Size: 128
Mean Learning Rate: 4.07e-04
Mean Weight Decay: 0.112

============================================================
Epoch 59/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6762261390686035 seconds
 LR changed during epoch: 1.64e-05 -> 1.40e-05
total runtime to train this model was 31.594770193099976 seconds
evaluation in 2.2745718955993652 seconds
  Loss: 0.0385
  Train Accuracy: 98.70%
  Test Accuracy: 84.59%

--- Training Member 1 (Batch size: 128) ---
built data in 1.663930892944336 seconds
 LR changed during epoch: 2.23e-05 -> 1.89e-05
total runtime to train this model was 16.548226594924927 seconds
evaluation in 2.268216133117676 seconds
  Loss: 0.0462
  Train Accuracy: 98.45%
  Test Accuracy: 85.25%

--- Training Member 2 (Batch size: 256) ---
built data in 1.688758373260498 seconds
 LR changed during epoch: 5.81e-04 -> 7.75e-04
total runtime to train this model was 10.206014156341553 seconds
evaluation in 2.2773828506469727 seconds
  Loss: 0.4354
  Train Accuracy: 84.50%
  Test Accuracy: 78.44%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6619813442230225 seconds
 LR changed during epoch: 2.24e-05 -> 1.90e-05
total runtime to train this model was 31.975608110427856 seconds
evaluation in 2.290633201599121 seconds
  Loss: 0.0219
  Train Accuracy: 99.27%
  Test Accuracy: 84.27%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6756181716918945 seconds
 LR changed during epoch: 3.01e-05 -> 2.55e-05
total runtime to train this model was 16.665619611740112 seconds
evaluation in 2.2762718200683594 seconds
  Loss: 0.0366
  Train Accuracy: 98.80%
  Test Accuracy: 84.76%

============================================================
Epoch 59 Summary:
============================================================
Time: 126.75s (Avg member: 25.35s)
Population Mean Accuracy: 83.46%
Best Member Accuracy: 85.25%
Mean Batch Size: 128
Mean Learning Rate: 4.07e-04
Mean Weight Decay: 0.112

============================================================
Epoch 60/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6622233390808105 seconds
 LR changed during epoch: 1.40e-05 -> 1.18e-05
total runtime to train this model was 31.011720418930054 seconds
evaluation in 2.266636610031128 seconds
  Loss: 0.0344
  Train Accuracy: 98.84%
  Test Accuracy: 84.83%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6747431755065918 seconds
 LR changed during epoch: 1.89e-05 -> 1.59e-05
total runtime to train this model was 16.2986319065094 seconds
evaluation in 2.276019811630249 seconds
  Loss: 0.0451
  Train Accuracy: 98.46%
  Test Accuracy: 85.16%

--- Training Member 2 (Batch size: 256) ---
built data in 1.668916940689087 seconds
 LR changed during epoch: 7.75e-04 -> 9.67e-04
total runtime to train this model was 10.183295011520386 seconds
evaluation in 2.2743189334869385 seconds
  Loss: 0.5070
  Train Accuracy: 81.95%
  Test Accuracy: 76.55%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6654298305511475 seconds
 LR changed during epoch: 1.90e-05 -> 1.60e-05
total runtime to train this model was 32.3012158870697 seconds
evaluation in 2.2664334774017334 seconds
  Loss: 0.0179
  Train Accuracy: 99.43%
  Test Accuracy: 84.39%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6695308685302734 seconds
 LR changed during epoch: 2.55e-05 -> 2.14e-05
total runtime to train this model was 16.322699069976807 seconds
evaluation in 2.275519609451294 seconds
  Loss: 0.0345
  Train Accuracy: 98.89%
  Test Accuracy: 84.81%

--- Population Update (Epoch 60) ---

=== PBT Exploit & Explore ===
Truncating 1 members
Top performers: ['85.16%']
Bottom performers: ['76.55%']
Member 2: lr changed from 0.0009670895363993511 to 0.0009549167487989527
Member 2: weight_decay changed from 0.11233071279526949 to 0.13531733339689656
Member 2: drop_path changed from 0.04011951119511094 to 0.054052373031378866
Member 2 copied from 1
  LR=9.55e-04, WD=0.135, DropPath=0.054, Warmup=5 epochs, Batch=256

============================================================
Epoch 60 Summary:
============================================================
Time: 125.83s (Avg member: 25.16s)
Population Mean Accuracy: 83.15%
Best Member Accuracy: 85.16%
Mean Batch Size: 128
Mean Learning Rate: 4.05e-04
Mean Weight Decay: 0.117

============================================================
Epoch 61/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6666297912597656 seconds
 LR changed during epoch: 1.18e-05 -> 9.77e-06
total runtime to train this model was 31.02057385444641 seconds
evaluation in 2.287782669067383 seconds
  Loss: 0.0318
  Train Accuracy: 98.95%
  Test Accuracy: 84.78%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6646122932434082 seconds
 LR changed during epoch: 1.59e-05 -> 1.31e-05
total runtime to train this model was 16.4886417388916 seconds
evaluation in 2.273472309112549 seconds
  Loss: 0.0409
  Train Accuracy: 98.59%
  Test Accuracy: 85.49%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6809697151184082 seconds
 LR changed during epoch: 9.74e-07 -> 1.92e-04
total runtime to train this model was 10.26936960220337 seconds
evaluation in 2.26883602142334 seconds
  Loss: 0.0729
  Train Accuracy: 97.52%
  Test Accuracy: 82.06%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6610198020935059 seconds
 LR changed during epoch: 1.60e-05 -> 1.32e-05
total runtime to train this model was 31.57489848136902 seconds
evaluation in 2.2641890048980713 seconds
  Loss: 0.0156
  Train Accuracy: 99.51%
  Test Accuracy: 84.51%

--- Training Member 4 (Batch size: 128) ---
built data in 1.66965651512146 seconds
 LR changed during epoch: 2.14e-05 -> 1.75e-05
total runtime to train this model was 16.59747290611267 seconds
evaluation in 2.270965814590454 seconds
  Loss: 0.0323
  Train Accuracy: 98.97%
  Test Accuracy: 85.19%

============================================================
Epoch 61 Summary:
============================================================
Time: 125.66s (Avg member: 25.13s)
Population Mean Accuracy: 84.41%
Best Member Accuracy: 85.49%
Mean Batch Size: 128
Mean Learning Rate: 4.05e-04
Mean Weight Decay: 0.117

============================================================
Epoch 62/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6617941856384277 seconds
 LR changed during epoch: 9.77e-06 -> 7.95e-06
total runtime to train this model was 34.73997759819031 seconds
evaluation in 2.274470090866089 seconds
  Loss: 0.0295
  Train Accuracy: 99.03%
  Test Accuracy: 84.71%

--- Training Member 1 (Batch size: 128) ---
built data in 1.674039363861084 seconds
 LR changed during epoch: 1.31e-05 -> 1.06e-05
total runtime to train this model was 16.032395124435425 seconds
evaluation in 2.2729649543762207 seconds
  Loss: 0.0372
  Train Accuracy: 98.76%
  Test Accuracy: 85.43%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6628050804138184 seconds
 LR changed during epoch: 1.92e-04 -> 3.83e-04
total runtime to train this model was 10.215880155563354 seconds
evaluation in 2.269540786743164 seconds
  Loss: 0.2284
  Train Accuracy: 91.85%
  Test Accuracy: 80.43%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6753458976745605 seconds
 LR changed during epoch: 1.32e-05 -> 1.06e-05
total runtime to train this model was 31.727109670639038 seconds
evaluation in 2.2931811809539795 seconds
  Loss: 0.0129
  Train Accuracy: 99.61%
  Test Accuracy: 84.64%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6640691757202148 seconds
 LR changed during epoch: 1.75e-05 -> 1.41e-05
total runtime to train this model was 16.51474142074585 seconds
evaluation in 2.269911289215088 seconds
  Loss: 0.0276
  Train Accuracy: 99.09%
  Test Accuracy: 85.23%

============================================================
Epoch 62 Summary:
============================================================
Time: 128.95s (Avg member: 25.79s)
Population Mean Accuracy: 84.09%
Best Member Accuracy: 85.43%
Mean Batch Size: 128
Mean Learning Rate: 4.05e-04
Mean Weight Decay: 0.117

============================================================
Epoch 63/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.680457353591919 seconds
 LR changed during epoch: 7.95e-06 -> 6.34e-06
total runtime to train this model was 32.11484622955322 seconds
evaluation in 2.295348882675171 seconds
  Loss: 0.0275
  Train Accuracy: 99.11%
  Test Accuracy: 84.78%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6571674346923828 seconds
 LR changed during epoch: 1.06e-05 -> 8.37e-06
total runtime to train this model was 16.36697793006897 seconds
evaluation in 2.2731363773345947 seconds
  Loss: 0.0336
  Train Accuracy: 98.90%
  Test Accuracy: 85.45%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6770920753479004 seconds
 LR changed during epoch: 3.83e-04 -> 5.74e-04
total runtime to train this model was 10.286400079727173 seconds
evaluation in 2.267134666442871 seconds
  Loss: 0.3432
  Train Accuracy: 87.78%
  Test Accuracy: 77.33%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6630594730377197 seconds
 LR changed during epoch: 1.06e-05 -> 8.41e-06
total runtime to train this model was 31.137349843978882 seconds
evaluation in 2.268115282058716 seconds
  Loss: 0.0131
  Train Accuracy: 99.59%
  Test Accuracy: 84.84%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6751973628997803 seconds
 LR changed during epoch: 1.41e-05 -> 1.11e-05
total runtime to train this model was 17.06192684173584 seconds
evaluation in 2.267331600189209 seconds
  Loss: 0.0262
  Train Accuracy: 99.15%
  Test Accuracy: 85.13%

============================================================
Epoch 63 Summary:
============================================================
Time: 126.70s (Avg member: 25.34s)
Population Mean Accuracy: 83.51%
Best Member Accuracy: 85.45%
Mean Batch Size: 128
Mean Learning Rate: 4.05e-04
Mean Weight Decay: 0.117

============================================================
Epoch 64/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6571199893951416 seconds
 LR changed during epoch: 6.34e-06 -> 4.93e-06
total runtime to train this model was 30.945351600646973 seconds
evaluation in 2.266385555267334 seconds
  Loss: 0.0263
  Train Accuracy: 99.15%
  Test Accuracy: 85.09%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6703455448150635 seconds
 LR changed during epoch: 8.37e-06 -> 6.42e-06
total runtime to train this model was 16.13593316078186 seconds
evaluation in 2.2824344635009766 seconds
  Loss: 0.0334
  Train Accuracy: 98.93%
  Test Accuracy: 85.45%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6611597537994385 seconds
 LR changed during epoch: 5.74e-04 -> 7.65e-04
total runtime to train this model was 10.196598529815674 seconds
evaluation in 2.267009735107422 seconds
  Loss: 0.4359
  Train Accuracy: 84.50%
  Test Accuracy: 76.59%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6755473613739014 seconds
 LR changed during epoch: 8.41e-06 -> 6.46e-06
total runtime to train this model was 31.18496584892273 seconds
evaluation in 2.2750887870788574 seconds
  Loss: 0.0122
  Train Accuracy: 99.65%
  Test Accuracy: 84.81%

--- Training Member 4 (Batch size: 128) ---
built data in 1.661588430404663 seconds
 LR changed during epoch: 1.11e-05 -> 8.42e-06
total runtime to train this model was 16.162203073501587 seconds
evaluation in 2.274066209793091 seconds
  Loss: 0.0246
  Train Accuracy: 99.17%
  Test Accuracy: 85.14%

============================================================
Epoch 64 Summary:
============================================================
Time: 124.32s (Avg member: 24.86s)
Population Mean Accuracy: 83.42%
Best Member Accuracy: 85.45%
Mean Batch Size: 128
Mean Learning Rate: 4.05e-04
Mean Weight Decay: 0.117

============================================================
Epoch 65/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.676088571548462 seconds
 LR changed during epoch: 4.93e-06 -> 3.74e-06
total runtime to train this model was 31.963132619857788 seconds
evaluation in 2.2660067081451416 seconds
  Loss: 0.0261
  Train Accuracy: 99.15%
  Test Accuracy: 85.18%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6736860275268555 seconds
 LR changed during epoch: 6.42e-06 -> 4.77e-06
total runtime to train this model was 16.152154445648193 seconds
evaluation in 2.2730607986450195 seconds
  Loss: 0.0297
  Train Accuracy: 99.06%
  Test Accuracy: 85.52%

--- Training Member 2 (Batch size: 256) ---
built data in 1.671999216079712 seconds
 LR changed during epoch: 7.65e-04 -> 9.55e-04
total runtime to train this model was 10.191574573516846 seconds
evaluation in 2.270387649536133 seconds
  Loss: 0.5015
  Train Accuracy: 82.06%
  Test Accuracy: 78.98%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6689958572387695 seconds
 LR changed during epoch: 6.46e-06 -> 4.80e-06
total runtime to train this model was 31.034652948379517 seconds
evaluation in 2.269909143447876 seconds
  Loss: 0.0104
  Train Accuracy: 99.63%
  Test Accuracy: 84.74%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6714069843292236 seconds
 LR changed during epoch: 8.42e-06 -> 6.16e-06
total runtime to train this model was 16.302577018737793 seconds
evaluation in 2.2694735527038574 seconds
  Loss: 0.0236
  Train Accuracy: 99.23%
  Test Accuracy: 85.36%

--- Population Update (Epoch 65) ---

=== PBT Exploit & Explore ===
Truncating 1 members
Top performers: ['85.52%']
Bottom performers: ['78.98%']
Member 2: lr changed from 0.0009549167487989527 to 0.0006837604589500978
Member 2: weight_decay changed from 0.13531733339689656 to 0.12671627759744886
Member 2: drop_path changed from 0.054052373031378866 to 0.02446883281240056
Member 2 copied from 1
  LR=6.84e-04, WD=0.127, DropPath=0.024, Warmup=5 epochs, Batch=256

============================================================
Epoch 65 Summary:
============================================================
Time: 125.37s (Avg member: 25.07s)
Population Mean Accuracy: 83.96%
Best Member Accuracy: 85.52%
Mean Batch Size: 128
Mean Learning Rate: 3.51e-04
Mean Weight Decay: 0.115

============================================================
Epoch 66/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6674284934997559 seconds
 LR changed during epoch: 3.74e-06 -> 2.75e-06
total runtime to train this model was 31.309173822402954 seconds
evaluation in 2.285576343536377 seconds
  Loss: 0.0251
  Train Accuracy: 99.21%
  Test Accuracy: 84.98%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6779606342315674 seconds
 LR changed during epoch: 4.77e-06 -> 3.42e-06
total runtime to train this model was 16.33928871154785 seconds
evaluation in 2.2754290103912354 seconds
  Loss: 0.0292
  Train Accuracy: 99.02%
  Test Accuracy: 85.51%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6660940647125244 seconds
 LR changed during epoch: 6.98e-07 -> 1.37e-04
total runtime to train this model was 10.204703092575073 seconds
evaluation in 2.280630588531494 seconds
  Loss: 0.0517
  Train Accuracy: 98.24%
  Test Accuracy: 83.27%

--- Training Member 3 (Batch size: 64) ---
built data in 1.679673671722412 seconds
 LR changed during epoch: 4.80e-06 -> 3.43e-06
total runtime to train this model was 32.03048801422119 seconds
evaluation in 2.285757303237915 seconds
  Loss: 0.0099
  Train Accuracy: 99.71%
  Test Accuracy: 84.85%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6604692935943604 seconds
 LR changed during epoch: 6.16e-06 -> 4.31e-06
total runtime to train this model was 15.953093767166138 seconds
evaluation in 2.286790132522583 seconds
  Loss: 0.0225
  Train Accuracy: 99.30%
  Test Accuracy: 85.36%

============================================================
Epoch 66 Summary:
============================================================
Time: 125.61s (Avg member: 25.12s)
Population Mean Accuracy: 84.79%
Best Member Accuracy: 85.51%
Mean Batch Size: 128
Mean Learning Rate: 3.51e-04
Mean Weight Decay: 0.115

============================================================
Epoch 67/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.675128698348999 seconds
 LR changed during epoch: 2.75e-06 -> 1.99e-06
total runtime to train this model was 32.72762751579285 seconds
evaluation in 2.270500898361206 seconds
  Loss: 0.0234
  Train Accuracy: 99.22%
  Test Accuracy: 85.06%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6663603782653809 seconds
 LR changed during epoch: 3.42e-06 -> 2.36e-06
total runtime to train this model was 15.92611813545227 seconds
evaluation in 2.2754898071289062 seconds
  Loss: 0.0300
  Train Accuracy: 99.00%
  Test Accuracy: 85.46%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6708080768585205 seconds
 LR changed during epoch: 1.37e-04 -> 2.74e-04
total runtime to train this model was 10.168538331985474 seconds
evaluation in 2.269939661026001 seconds
  Loss: 0.1582
  Train Accuracy: 94.45%
  Test Accuracy: 82.49%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6609926223754883 seconds
 LR changed during epoch: 3.43e-06 -> 2.37e-06
total runtime to train this model was 31.729718685150146 seconds
evaluation in 2.307236909866333 seconds
  Loss: 0.0091
  Train Accuracy: 99.75%
  Test Accuracy: 84.86%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6844265460968018 seconds
 LR changed during epoch: 4.31e-06 -> 2.86e-06
total runtime to train this model was 16.7408230304718 seconds
evaluation in 2.2855210304260254 seconds
  Loss: 0.0204
  Train Accuracy: 99.36%
  Test Accuracy: 85.30%

============================================================
Epoch 67 Summary:
============================================================
Time: 127.06s (Avg member: 25.41s)
Population Mean Accuracy: 84.63%
Best Member Accuracy: 85.46%
Mean Batch Size: 128
Mean Learning Rate: 3.51e-04
Mean Weight Decay: 0.115

============================================================
Epoch 68/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.673388957977295 seconds
 LR changed during epoch: 1.99e-06 -> 1.44e-06
total runtime to train this model was 32.68529653549194 seconds
evaluation in 2.2675626277923584 seconds
  Loss: 0.0211
  Train Accuracy: 99.34%
  Test Accuracy: 85.03%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6655340194702148 seconds
 LR changed during epoch: 2.36e-06 -> 1.61e-06
total runtime to train this model was 16.213542699813843 seconds
evaluation in 2.2831835746765137 seconds
  Loss: 0.0275
  Train Accuracy: 99.15%
  Test Accuracy: 85.57%

--- Training Member 2 (Batch size: 256) ---
built data in 1.663224220275879 seconds
 LR changed during epoch: 2.74e-04 -> 4.11e-04
total runtime to train this model was 10.182587623596191 seconds
evaluation in 2.2691314220428467 seconds
  Loss: 0.2621
  Train Accuracy: 90.71%
  Test Accuracy: 81.50%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6690154075622559 seconds
 LR changed during epoch: 2.37e-06 -> 1.61e-06
total runtime to train this model was 31.81959319114685 seconds
evaluation in 2.2646656036376953 seconds
  Loss: 0.0095
  Train Accuracy: 99.71%
  Test Accuracy: 84.83%

--- Training Member 4 (Batch size: 128) ---
built data in 1.659769058227539 seconds
 LR changed during epoch: 2.86e-06 -> 1.83e-06
total runtime to train this model was 16.4790256023407 seconds
evaluation in 2.2762346267700195 seconds
  Loss: 0.0217
  Train Accuracy: 99.32%
  Test Accuracy: 85.42%

============================================================
Epoch 68 Summary:
============================================================
Time: 127.08s (Avg member: 25.42s)
Population Mean Accuracy: 84.47%
Best Member Accuracy: 85.57%
Mean Batch Size: 128
Mean Learning Rate: 3.51e-04
Mean Weight Decay: 0.115

============================================================
Epoch 69/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6817431449890137 seconds
 LR changed during epoch: 1.44e-06 -> 1.11e-06
total runtime to train this model was 33.765989542007446 seconds
evaluation in 2.269702911376953 seconds
  Loss: 0.0209
  Train Accuracy: 99.29%
  Test Accuracy: 85.07%

--- Training Member 1 (Batch size: 128) ---
built data in 1.66544771194458 seconds
 LR changed during epoch: 1.61e-06 -> 1.15e-06
total runtime to train this model was 16.271254539489746 seconds
evaluation in 2.2830393314361572 seconds
  Loss: 0.0276
  Train Accuracy: 99.07%
  Test Accuracy: 85.50%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6759579181671143 seconds
 LR changed during epoch: 4.11e-04 -> 5.48e-04
total runtime to train this model was 10.234209299087524 seconds
evaluation in 2.2742502689361572 seconds
  Loss: 0.3386
  Train Accuracy: 87.70%
  Test Accuracy: 78.68%

--- Training Member 3 (Batch size: 64) ---
built data in 1.6650886535644531 seconds
 LR changed during epoch: 1.61e-06 -> 1.15e-06
total runtime to train this model was 31.47985863685608 seconds
evaluation in 2.274324417114258 seconds
  Loss: 0.0092
  Train Accuracy: 99.72%
  Test Accuracy: 84.88%

--- Training Member 4 (Batch size: 128) ---
built data in 1.6749708652496338 seconds
 LR changed during epoch: 1.83e-06 -> 1.21e-06
total runtime to train this model was 15.980617046356201 seconds
evaluation in 2.2708137035369873 seconds
  Loss: 0.0213
  Train Accuracy: 99.32%
  Test Accuracy: 85.46%

============================================================
Epoch 69 Summary:
============================================================
Time: 127.47s (Avg member: 25.49s)
Population Mean Accuracy: 83.92%
Best Member Accuracy: 85.50%
Mean Batch Size: 128
Mean Learning Rate: 3.51e-04
Mean Weight Decay: 0.115

============================================================
Epoch 70/70
============================================================

--- Training Member 0 (Batch size: 64) ---
built data in 1.6613094806671143 seconds
 LR changed during epoch: 1.11e-06 -> 1.00e-06
total runtime to train this model was 31.690948009490967 seconds
evaluation in 2.299488067626953 seconds
  Loss: 0.0220
  Train Accuracy: 99.31%
  Test Accuracy: 85.19%

--- Training Member 1 (Batch size: 128) ---
built data in 1.6731157302856445 seconds
 LR changed during epoch: 1.15e-06 -> 1.00e-06
total runtime to train this model was 16.011502265930176 seconds
evaluation in 2.283090591430664 seconds
  Loss: 0.0275
  Train Accuracy: 99.07%
  Test Accuracy: 85.54%

--- Training Member 2 (Batch size: 256) ---
built data in 1.6644701957702637 seconds
 LR changed during epoch: 5.48e-04 -> 6.84e-04
total runtime to train this model was 10.155176639556885 seconds
evaluation in 2.279444694519043 seconds
  Loss: 0.4010
  Train Accuracy: 85.57%
  Test Accuracy: 78.60%

--- Training Member 3 (Batch size: 64) ---
built data in 1.666313886642456 seconds
 LR changed during epoch: 1.15e-06 -> 1.00e-06
total runtime to train this model was 31.64215898513794 seconds
evaluation in 2.2794349193573 seconds
  Loss: 0.0090
  Train Accuracy: 99.74%
  Test Accuracy: 84.86%

--- Training Member 4 (Batch size: 128) ---
built data in 1.663888931274414 seconds
 LR changed during epoch: 1.21e-06 -> 1.00e-06
total runtime to train this model was 16.433417320251465 seconds
evaluation in 2.2750184535980225 seconds
  Loss: 0.0209
  Train Accuracy: 99.32%
  Test Accuracy: 85.49%

--- Population Update (Epoch 70) ---

=== PBT Exploit & Explore ===
Truncating 1 members
Top performers: ['85.54%']
Bottom performers: ['78.60%']
Member 2: lr changed from 0.0006837604589500978 to 0.0005905944867184937
Member 2: weight_decay changed from 0.12671627759744886 to 0.10738051610289821
Member 2: drop_path changed from 0.02446883281240056 to 0.05201415389152553
Member 2: batch_size changed from 256 to 128
Member 2 copied from 1
  LR=5.91e-04, WD=0.107, DropPath=0.052, Warmup=5 epochs, Batch=128

============================================================
Epoch 70 Summary:
============================================================
Time: 125.69s (Avg member: 25.14s)
Population Mean Accuracy: 83.94%
Best Member Accuracy: 85.54%
Mean Batch Size: 102
Mean Learning Rate: 3.32e-04
Mean Weight Decay: 0.111

======================================================================
                        PBT TRAINING COMPLETE                         
======================================================================
Best member: 1
Best accuracy: 85.54%

Best hyperparameters:
  Learning Rate: 2.61e-04
  Weight Decay: 0.133
  Drop Path Rate: 0.120
  Warmup Epochs: 5
  Batch Size: 128

======================================================================
                          PBT TIMING REPORT                           
======================================================================

Overall Statistics                       Value                         
----------------------------------------------------------------------
Total runtime                            9098.12s (151.64 min)
Number of epochs                         70
Number of population updates             14

Epoch Timing                             Value                         
----------------------------------------------------------------------
Average epoch time                       129.95s
Std epoch time                           6.13s
Min epoch time                           124.15s (epoch 10)
Max epoch time                           152.70s (epoch 18)

Member Training Timing                   Value                         
----------------------------------------------------------------------
Average member time per epoch            25.99s
Total training time                      9096.45s
Training efficiency                      100.0%

Population Update Timing                 Value                         
----------------------------------------------------------------------
Average update time                      0.01s
Total update time                        0.12s
Update efficiency                        0.0%

Batch Size Analysis                      Avg Time        Samples        
----------------------------------------------------------------------
Batch size 64                            35.88s      145            
Batch size 128                           20.35s      160            
Batch size 256                           14.19s      45             

Per-Member Statistics                    Avg Time        Total Time     
----------------------------------------------------------------------
Member 0                                 35.97s      2517.92s
Member 1                                 20.34s      1423.91s
Member 2                                 17.52s      1226.73s
Member 3                                 35.76s      2503.45s
Member 4                                 20.35s      1424.44s

======================================================================