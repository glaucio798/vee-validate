import Vue from 'vue';
import { ValidationResult, VeeObserver, VNodeWithVeeContext, ValidationFlags } from '../types';
interface ObserverField {
  id: string;
  name: string;
  failedRules: Record<string, string>;
  pristine: boolean;
  dirty: boolean;
  touched: boolean;
  untouched: boolean;
  valid: boolean;
  invalid: boolean;
  pending: boolean;
  validated: boolean;
  changed: boolean;
  passed: boolean;
  failed: boolean;
}
export declare const ValidationObserver: import('vue/types/vue').ExtendedVue<
  Vue & {
    $_veeObserver: VeeObserver;
    $vnode: VNodeWithVeeContext;
  },
  {
    id: string;
    refs: Record<
      string,
      import('vue/types/vue').CombinedVueInstance<
        {
          errors: string[];
          value: undefined;
          initialized: boolean;
          initialValue: undefined;
          flags: ValidationFlags;
          failedRules: {};
          isActive: boolean;
          fieldName: string;
          id: string;
        } & {
          setFlags(flags: Partial<ValidationFlags>): void;
          syncValue(v: any): void;
          reset(): void;
          validate(...args: any[]): Promise<ValidationResult>;
          validateSilent(): Promise<ValidationResult>;
          setErrors(errors: string[]): void;
          applyResult({
            errors,
            failedRules,
            regenerateMap
          }: Pick<ValidationResult, 'errors' | 'failedRules' | 'regenerateMap'>): void;
          registerField(): void;
        } & {
          fieldDeps: string[];
          normalizedEvents: string[];
          isRequired: boolean;
          classes: Record<string, boolean>;
          normalizedRules: {
            [x: string]: any;
          };
        } & {
          vid: string;
          name: string;
          mode: TimerHandler;
          rules: any;
          immediate: boolean;
          bails: boolean;
          skipIfEmpty: boolean;
          debounce: number;
          tag: string;
          slim: boolean;
          disabled: boolean;
          customMessages: any;
        } & Vue & {
            $_veeObserver: VeeObserver;
            _needsValidation: boolean;
            _inputEventName: string;
            _ignoreImmediate: boolean;
            _pendingValidation?: Promise<ValidationResult> | undefined;
            _pendingReset?: boolean | undefined;
            _resolvedRules: any;
            _regenerateMap?: Record<string, () => string> | undefined;
            _veeWatchers: Record<string, Function>;
            $veeDebounce?: number | undefined;
            $veeHandler?: Function | undefined;
            $veeOnInput?: Function | undefined;
            $veeOnBlur?: Function | undefined;
            $vnode: VNodeWithVeeContext;
            $localeHandler: Function;
          },
        object,
        object,
        object,
        Record<never, any>
      >
    >;
    observers: any[];
    errors: Record<string, string[]>;
    flags: ValidationFlags;
    fields: Record<string, ObserverField>;
  },
  {
    observe(subscriber: any, kind?: string): void;
    unobserve(id: string, kind?: string): void;
    validateWithInfo({
      silent
    }?: {
      silent?: boolean | undefined;
    }): Promise<{
      errors: Record<string, string[]>;
      flags: ValidationFlags;
      fields: Record<string, ObserverField>;
      isValid: boolean;
    }>;
    validate({ silent }?: { silent?: boolean | undefined }): Promise<boolean>;
    handleSubmit(cb: Function): Promise<any>;
    reset(): void;
    setErrors(errors: Record<string, string[] | string>): void;
  },
  unknown,
  {
    tag: string;
    vid: string;
    slim: boolean;
    disabled: boolean;
  }
>;
export {};
