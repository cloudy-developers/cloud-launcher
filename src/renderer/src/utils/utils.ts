import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export class Utils {
  /**
   * Merges and combines class names using clsx and tailwind-merge.
   * This method takes multiple class values as input, removes any duplicates,
   * and resolves any conflicting Tailwind CSS classes to ensure the final
   * output is a clean, optimized string of class names.
   * @param inputs
   * @returns { string } Updated className
   */
  static cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs))
  }
}
