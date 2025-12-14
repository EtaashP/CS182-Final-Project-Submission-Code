# CS182 Final Project

This repository contains the code, data artifacts, and reproduction scripts for our CS182 final project submission.

**Replicability Statement:**
To satisfy course requirements for easy replicability, we have included our processed data in the **Structured Outputs/** folder. This allows reviewers to replicate all Plots and Tables immediately without running the computationally expensive training experiments.

## Repository Structure

- **Code to Run Expirements/**: Notebooks/scripts used to launch training runs and produce raw logs.
- **Raw Outputs/**: Raw logs and checkpoints produced by experiments.
- **Data Processing/**: Scripts to convert raw outputs into clean, machine-readable spreadsheets.
- **Structured Outputs/**: Cleaned data (Excel/CSV) produced by the processing step. **This is the source-of-truth for all plots and tables.**
- **Plotting Code/**: Scripts to generate all figures.
- **Deliverables/**: Artifacts used for the poster session.

## 1. Setup
### Data Access

This project uses the CIFAR-10 dataset. The code in **Code to Run Expirements/** is configured to automatically download the dataset (via `torchvision`, HuggingFace, etc.) if it is not detected locally.

## 2\. Reproducing Results (Plots & Tables)

**Requirement A:** You can replicate all plots and tables easily using the pre-calculated data in **Structured Outputs/**.

### Generate Plots (and Tables 1, 5, 6)

Run the plotting noteboks in 'PLotting Code'. These will read from **Structured Outputs/** and save figures to the **Plotting Code/** directory

### Reproducing Other Tables

The exact values used for the remaining tables have been pre-computed and stored in the processed spreadsheets. No manual calculation is required, but you will have to manually read some of the values
from the csvs.

## 3\. Full Experiment Workflow (Optional)

If you wish to re-run the full pipeline from scratch:

1.  **Train Models:**
    Navigate to **Code to Run Expirements/** and run the experiment notebooks.

      * *Note:* Check the configuration at the top of the notebook to ensure paths are set for your environment (Local vs. Colab).
      * Outputs will be saved to **Raw Outputs/**.

2.  **Process Data:**
    Run the scripts in **Data Processing/**.

      * These scripts parse the messy files in **Raw Outputs/** and update the files in **Structured Outputs/**.

3.  **Visualize:**
    Run the steps in Section 2 above to regenerate plots based on your new data.

## Reproducibility Notes

  - **Paths:** Scripts should be executed from the root directory of this repository so relative paths (e.g., `"Structured Outputs/data.xlsx"`) resolve correctly.
  - **Hardware:** Full training runs were performed on various GPUs (t4-A100). Re-running full experiments locally may take significant time.